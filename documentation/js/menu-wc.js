'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">ri-reader documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-efb4b4134bd3789afa2d46c88672f989ef8ce1590a9168c802d13dc6ab55b15fc9e66724b40c3591d6fdc010e8d75838449bbe37b7ae82622ead302db8e380ca"' : 'data-target="#xs-components-links-module-AppModule-efb4b4134bd3789afa2d46c88672f989ef8ce1590a9168c802d13dc6ab55b15fc9e66724b40c3591d6fdc010e8d75838449bbe37b7ae82622ead302db8e380ca"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-efb4b4134bd3789afa2d46c88672f989ef8ce1590a9168c802d13dc6ab55b15fc9e66724b40c3591d6fdc010e8d75838449bbe37b7ae82622ead302db8e380ca"' :
                                            'id="xs-components-links-module-AppModule-efb4b4134bd3789afa2d46c88672f989ef8ce1590a9168c802d13dc6ab55b15fc9e66724b40c3591d6fdc010e8d75838449bbe37b7ae82622ead302db8e380ca"' }>
                                            <li class="link">
                                                <a href="components/AccordionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccordionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AccountProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccountProfileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BooksComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BooksComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BottomNavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BottomNavComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CaptureComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CaptureComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CardsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CardsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FloatingMenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FloatingMenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InsightsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InsightsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoadingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoadingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoadingOverlayComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoadingOverlayComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OverlayComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OverlayComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PassagesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PassagesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-efb4b4134bd3789afa2d46c88672f989ef8ce1590a9168c802d13dc6ab55b15fc9e66724b40c3591d6fdc010e8d75838449bbe37b7ae82622ead302db8e380ca"' : 'data-target="#xs-injectables-links-module-AppModule-efb4b4134bd3789afa2d46c88672f989ef8ce1590a9168c802d13dc6ab55b15fc9e66724b40c3591d6fdc010e8d75838449bbe37b7ae82622ead302db8e380ca"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-efb4b4134bd3789afa2d46c88672f989ef8ce1590a9168c802d13dc6ab55b15fc9e66724b40c3591d6fdc010e8d75838449bbe37b7ae82622ead302db8e380ca"' :
                                        'id="xs-injectables-links-module-AppModule-efb4b4134bd3789afa2d46c88672f989ef8ce1590a9168c802d13dc6ab55b15fc9e66724b40c3591d6fdc010e8d75838449bbe37b7ae82622ead302db8e380ca"' }>
                                        <li class="link">
                                            <a href="injectables/BookService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BookService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CameraService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CameraService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FloatingMenuService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FloatingMenuService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LoadingOverlayService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoadingOverlayService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/OcrService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OcrService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-0fcd7ef62763ae19b5c674ecf34de89b53f0eb4ea84ae7f58b6f61791b08ff3756ae8287bd592773e4a73526e253e8f99e1d4729746868827fdd1658b29d8ba0"' : 'data-target="#xs-components-links-module-SharedModule-0fcd7ef62763ae19b5c674ecf34de89b53f0eb4ea84ae7f58b6f61791b08ff3756ae8287bd592773e4a73526e253e8f99e1d4729746868827fdd1658b29d8ba0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-0fcd7ef62763ae19b5c674ecf34de89b53f0eb4ea84ae7f58b6f61791b08ff3756ae8287bd592773e4a73526e253e8f99e1d4729746868827fdd1658b29d8ba0"' :
                                            'id="xs-components-links-module-SharedModule-0fcd7ef62763ae19b5c674ecf34de89b53f0eb4ea84ae7f58b6f61791b08ff3756ae8287bd592773e4a73526e253e8f99e1d4729746868827fdd1658b29d8ba0"' }>
                                            <li class="link">
                                                <a href="components/EditorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TopNavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TopNavComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-SharedModule-0fcd7ef62763ae19b5c674ecf34de89b53f0eb4ea84ae7f58b6f61791b08ff3756ae8287bd592773e4a73526e253e8f99e1d4729746868827fdd1658b29d8ba0"' : 'data-target="#xs-directives-links-module-SharedModule-0fcd7ef62763ae19b5c674ecf34de89b53f0eb4ea84ae7f58b6f61791b08ff3756ae8287bd592773e4a73526e253e8f99e1d4729746868827fdd1658b29d8ba0"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SharedModule-0fcd7ef62763ae19b5c674ecf34de89b53f0eb4ea84ae7f58b6f61791b08ff3756ae8287bd592773e4a73526e253e8f99e1d4729746868827fdd1658b29d8ba0"' :
                                        'id="xs-directives-links-module-SharedModule-0fcd7ef62763ae19b5c674ecf34de89b53f0eb4ea84ae7f58b6f61791b08ff3756ae8287bd592773e4a73526e253e8f99e1d4729746868827fdd1658b29d8ba0"' }>
                                        <li class="link">
                                            <a href="directives/OutsideClickDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OutsideClickDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/VerticalResizeDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VerticalResizeDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SharedModule-0fcd7ef62763ae19b5c674ecf34de89b53f0eb4ea84ae7f58b6f61791b08ff3756ae8287bd592773e4a73526e253e8f99e1d4729746868827fdd1658b29d8ba0"' : 'data-target="#xs-injectables-links-module-SharedModule-0fcd7ef62763ae19b5c674ecf34de89b53f0eb4ea84ae7f58b6f61791b08ff3756ae8287bd592773e4a73526e253e8f99e1d4729746868827fdd1658b29d8ba0"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SharedModule-0fcd7ef62763ae19b5c674ecf34de89b53f0eb4ea84ae7f58b6f61791b08ff3756ae8287bd592773e4a73526e253e8f99e1d4729746868827fdd1658b29d8ba0"' :
                                        'id="xs-injectables-links-module-SharedModule-0fcd7ef62763ae19b5c674ecf34de89b53f0eb4ea84ae7f58b6f61791b08ff3756ae8287bd592773e4a73526e253e8f99e1d4729746868827fdd1658b29d8ba0"' }>
                                        <li class="link">
                                            <a href="injectables/LoadingOverlayService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoadingOverlayService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PassageService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PassageService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ThemeService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ThemeService</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-SharedModule-0fcd7ef62763ae19b5c674ecf34de89b53f0eb4ea84ae7f58b6f61791b08ff3756ae8287bd592773e4a73526e253e8f99e1d4729746868827fdd1658b29d8ba0"' : 'data-target="#xs-pipes-links-module-SharedModule-0fcd7ef62763ae19b5c674ecf34de89b53f0eb4ea84ae7f58b6f61791b08ff3756ae8287bd592773e4a73526e253e8f99e1d4729746868827fdd1658b29d8ba0"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-SharedModule-0fcd7ef62763ae19b5c674ecf34de89b53f0eb4ea84ae7f58b6f61791b08ff3756ae8287bd592773e4a73526e253e8f99e1d4729746868827fdd1658b29d8ba0"' :
                                            'id="xs-pipes-links-module-SharedModule-0fcd7ef62763ae19b5c674ecf34de89b53f0eb4ea84ae7f58b6f61791b08ff3756ae8287bd592773e4a73526e253e8f99e1d4729746868827fdd1658b29d8ba0"' }>
                                            <li class="link">
                                                <a href="pipes/CapsPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CapsPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/FilterAllPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilterAllPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/FilterPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilterPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/ToggleTabsComponent.html" data-type="entity-link" >ToggleTabsComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/BookList.html" data-type="entity-link" >BookList</a>
                            </li>
                            <li class="link">
                                <a href="classes/Passages.html" data-type="entity-link" >Passages</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/SupabaseService.html" data-type="entity-link" >SupabaseService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IBook.html" data-type="entity-link" >IBook</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBookGenre.html" data-type="entity-link" >IBookGenre</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBookGenreRef.html" data-type="entity-link" >IBookGenreRef</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBookListItem.html" data-type="entity-link" >IBookListItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBookScoreCategory.html" data-type="entity-link" >IBookScoreCategory</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBookScoreTotal.html" data-type="entity-link" >IBookScoreTotal</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IFloatingMenuOption.html" data-type="entity-link" >IFloatingMenuOption</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IFloatingMenuStyle.html" data-type="entity-link" >IFloatingMenuStyle</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/INavButton.html" data-type="entity-link" >INavButton</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPassage.html" data-type="entity-link" >IPassage</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPassageNote.html" data-type="entity-link" >IPassageNote</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPassageTag.html" data-type="entity-link" >IPassageTag</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IProfile.html" data-type="entity-link" >IProfile</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});