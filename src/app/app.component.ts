import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeService } from './services/theme.service';
import { DeviceOsService } from './services/device-os.service';
import { Router } from '@angular/router';
import { INavButton } from './components/bottom-nav/bottom-nav.component';
import { OcrService } from './services/ocr.service';
import { LoadingOverlayService } from './services/loading-overlay.service';
import { CameraService } from './services/camera.service';
import { FloatingMenuService, IFloatingMenuOption } from './services/floating-menu.service';
import { Platform } from '@angular/cdk/platform';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  /* -------------------------------------------------------------------------- */
  /*                  TOP NAV PROPERTIES & OCR PROCESS TRIGGERS                 */
  /* -------------------------------------------------------------------------- */
  /** Bounded to the text from the `top-nav` component, if left blank, the `top-nav` will instead show a programmatic greeting that changes depending on the time of day */
  titleText = '';
  /** Object that adds icon and passed data param from `top-nav` component's `ActionButton` */
  captureButton = {
    icon: 'bookmark_add',
    target: 'passage'
  };
  /** Hides a file upload element in the `app.component.html` file so that it's triggered programmatically by the `ElementRef` instead */
  fileElementVisible = false;
  /** How the app can trigger the image selection window without having an input file element that the user actually has to click */
  @ViewChild('addPassageElement') addPassageElement!: ElementRef;
  /** The options to the type of {@link IFloatingMenuOption}[] sent to the `FloatingMenuService` so that a menu is listed when the user selects "add new passage" from a mobile phone (they're given either the option to capture an image via camera OR to select an existing image from local device [works for both mobile AND browser]) */
  passageMethodOptions: IFloatingMenuOption[] = [
    {
      icon: 'camera',
      label: 'Take Photo',
      target: 'takePhoto'
    },
    {
      icon: 'image',
      label: 'Select Image',
      target: 'selectImage'
    }
  ];

  /* -------------------------------------------------------------------------- */
  /*               ROUTER NAVIGATION THROUGH BOTTOM-NAV COMPONENT               */
  /* -------------------------------------------------------------------------- */
  /** Fed routerLinks objects in an array to the type of {@link INavButton}[] this is so the bottom bar can be fed styling preferences and data to be passed in when action is taken through clicks */
  routerLinks: INavButton[] = [
    {
      icon: 'auto_stories',
      label: 'books',
      target: '',
      routerLink: '/books',
      isActive: true
    },
    {
      icon: 'bookmarks',
      label: 'passages',
      target: '',
      routerLink: '/passages',
      isActive: false
    },
    {
      icon: 'auto_graph',
      label: 'insights',
      target: '',
      routerLink: '/dashboard',
      isActive: false
    },
    {
      icon: 'bookmark_add',
      label: 'Add',
      target: '',
      routerLink: '/capture',
      isActive: false
    }
  ];

  /* -------------------------------------------------------------------------- */
  /*                       GENERAL APP AND VIEW PROPERTIES                      */
  /* -------------------------------------------------------------------------- */
  lightTheme = true;
  isMobile!: boolean;
  isLoading = false; // for overlay spinner combo
  private sub = new Subscription();
  @ViewChild('scrollToTopDiv') scrollToTopDiv!: ElementRef;

  constructor(
    
    public theme: ThemeService,
    public device: DeviceOsService,
    private router: Router,
    public ocr: OcrService,
    public loading: LoadingOverlayService,
    public camService: CameraService,
    private floatingMenu: FloatingMenuService,
    private platform: Platform
  ) {}

  /** @ignore */
  ngOnInit(): void {
    this.checkTheme();
    this.device.runPlatformMonitor();
  }

  /** @ignore */
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  /**
   * Performs 3 Tasks whenever a new route is activated
   * 
   * 1. Scrolls to a top div element in the app root component to override the SPA maintaining scroll position 
   * 2. For all routerlinks listed (clicked by the user from the bottom-bar component) in the `routerLinks` array for this component, assigns each object's `isActive` property in the array with a value of `false`
   * 3. With all routerLinks objects having `isActive: false` will then assign the object related to the view `isActive: true` so that the item is 'active' visually in the bottom nav bar
   */
  onRouteActivation() {
    this.scrollToTopDiv.nativeElement.scrollIntoView();
    this.resetActivations();
    this.routerLinks.map((each: any) => {
      if (each.routerLink == this.router.url) {
        each.isActive = true;
      }
    })
  }
  /**
   * When the app initializes this method is called to 
   * 
   * 1. Retrieve the current theme state (stored in Local Storage) via `ThemeService`'s `getInitTheme()` method. Which ensures that the current app state matches that saved in local storage.
   * 2. Ensures that the local toggle state reflects the current state of both the app and local storage
   */
  private checkTheme() {
    const themeState = this.theme.getInitTheme();
    if (themeState == 'lightTheme') {
      this.lightTheme = true;
    } else if (themeState == 'darkTheme') {
      this.lightTheme = false;
    } else { console.log('Duno'); }
  }

  /* -------------------------------------------------------------------------- */
  /*                              TOP BAR COMPONENT                             */
  /* -------------------------------------------------------------------------- */
  /* ----------------------------- INPUT AS SEARCH ---------------------------- */
  /**
   * Full string for search field
   * @param data Text string that the user completed in the top-nav component's input field and pressed 'enter' for
   */
  onSearchEnter(data: any) {
    console.log(data);
  }

  /* -------------------- OCR READER IN ADD PASSAGE BUTTON -------------------- */
  /**
   * When the user clicks the `Add New Passage` circle button from the top nav, it triggers the `onAddPassage()` method
   * IF the user is on a mobile device, clicking the button will present 2 options: to select from images or to trigger the camera
   * ELSE it's assumed that the user is on web, where they will instead trigger the window or library of photos
   * @param value The value is destructured from the event (click or touch event), data passed in (likely from a 'target' string that accompanied the menu option), and rectBottom (the distance from the top of the viewport to the bottom of the identified rectangle where the click originated from)
   */
  onAddPassage(value: any) {
    const { event, data, rectBottom } = value;
    const platformMobile = this.platform.IOS || this.platform.ANDROID;
    const styleConfig = { floatsRight: true, marginWidth: 5 };
    
    if (event && platformMobile) {
      this.floatingMenu.callFloatingMenu(this.passageMethodOptions, styleConfig, rectBottom);
    } else { this.triggerImageSelection(); }
  }

  /**
   * Parses out the decision from the user on Mobile. If they choose to use their camera, it'll call the `triggerCamera()` function. If they choose `Select Image` this will call the `triggerImageSelection()` function.
   * @param selectedOption A string that represents which option the user chose on mobile: to either use their camera or select from existing images
   */
  onOptionClick(selectedOption: any) {
    switch(selectedOption) {
      case 'takePhoto':
        this.triggerCamera();
        break;
      case 'selectImage':
        this.triggerImageSelection();
        break;
    }
  }

  /**
   * If the user is either on mobile or on web, they have the option to trigger a selection window of any images they want to use instead of taking an image with a photo.
   */
  triggerImageSelection() {
    this.router.navigateByUrl('/capture');
    setTimeout(() => {
      this.addPassageElement.nativeElement.click();
    }, 100);
    // Actual image collection and throwing to onFileSelect() done in component
  }

  /**
   * If the user is on Mobile, this method will
   * 
   * 1. Call the CameraService to trigger its `captureImage()` method (async)
   * 2. Return the base64string from the service
   * 3. Applies the selected base64 image string to the `onFileSelect()` method
   */
  async triggerCamera() {
    const image = await this.camService.captureImage();
    this.onFileSelect(image);
  }

  /**
   * Receives event data either from:
   * 
   * 1. The `triggerCamera()` method that captures and translates data from the user's mobile camera into a base64 string
   * 2. The file upload element (hidden) in the `app.component.html` file, which then directly calls this method via `(change)` event on the input
   * 
   * @param event Holds the file data (base64) either from the image captured from the mobile phone, or the image selected from the device locally
   */
  onFileSelect(event: any) {
    this.ocr.scanImage(event);
  }
  /* -------------------------------------------------------------------------- */
  /*                              MOBILE BOTTOM BAR                             */
  /* -------------------------------------------------------------------------- */
  /**
   * 
   * @param val Value passed by the `bottom-nav` component when a user clicks an option. The data passed through is destructured to reveal that the data contains: 
   * 
   * 1. icon `string`
   * 2. label `string`
   * 3. target `string`
   * 4. routerLink `string`
   * 5. isActive `boolean`
   */
  onMobileBottomBarClick(val: any) {
    const { icon, label, target, routerLink, isActive } = val;
    if (routerLink) {
      this.routerLinks.map((obj: any) => {
        if (obj.routerLink == routerLink) {
          this.resetActivations();
          obj.isActive = true;
          this.router.navigateByUrl(obj.routerLink);
        }
      })
    } else if (!routerLink && target) {
      this.routerLinks.map((obj: any) => {
        this.resetActivations();
        obj.isActive = true;

      })
    } else {
      console.log('missing data => ', val);
    }
  }
  /**
   * Takes all the routerLink objects that determine routes and displayed icons (etc) in `bottom-nav` component, and resets all `isActive` fields by assigning `false` to them
   */
  private resetActivations() {
    this.routerLinks.map((each: any) => Object.assign(each, { isActive: false }));
  }

}
