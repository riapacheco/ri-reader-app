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
                                            'data-target="#components-links-module-AppModule-f4941890db1436fd8b09d93b5644441ad6a3da5c100f80832509c217969fecfb23d0cd28574cdf926154f976d145eefa11eb756685b17910837313ba22c285b9"' : 'data-target="#xs-components-links-module-AppModule-f4941890db1436fd8b09d93b5644441ad6a3da5c100f80832509c217969fecfb23d0cd28574cdf926154f976d145eefa11eb756685b17910837313ba22c285b9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-f4941890db1436fd8b09d93b5644441ad6a3da5c100f80832509c217969fecfb23d0cd28574cdf926154f976d145eefa11eb756685b17910837313ba22c285b9"' :
                                            'id="xs-components-links-module-AppModule-f4941890db1436fd8b09d93b5644441ad6a3da5c100f80832509c217969fecfb23d0cd28574cdf926154f976d145eefa11eb756685b17910837313ba22c285b9"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppStatusBarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppStatusBarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BottomBarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BottomBarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CaptureImageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CaptureImageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DrawerMenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DrawerMenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginRegisterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginRegisterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ToggleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ToggleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TopBarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TopBarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-AppModule-f4941890db1436fd8b09d93b5644441ad6a3da5c100f80832509c217969fecfb23d0cd28574cdf926154f976d145eefa11eb756685b17910837313ba22c285b9"' : 'data-target="#xs-directives-links-module-AppModule-f4941890db1436fd8b09d93b5644441ad6a3da5c100f80832509c217969fecfb23d0cd28574cdf926154f976d145eefa11eb756685b17910837313ba22c285b9"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-AppModule-f4941890db1436fd8b09d93b5644441ad6a3da5c100f80832509c217969fecfb23d0cd28574cdf926154f976d145eefa11eb756685b17910837313ba22c285b9"' :
                                        'id="xs-directives-links-module-AppModule-f4941890db1436fd8b09d93b5644441ad6a3da5c100f80832509c217969fecfb23d0cd28574cdf926154f976d145eefa11eb756685b17910837313ba22c285b9"' }>
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
                                        'data-target="#injectables-links-module-AppModule-f4941890db1436fd8b09d93b5644441ad6a3da5c100f80832509c217969fecfb23d0cd28574cdf926154f976d145eefa11eb756685b17910837313ba22c285b9"' : 'data-target="#xs-injectables-links-module-AppModule-f4941890db1436fd8b09d93b5644441ad6a3da5c100f80832509c217969fecfb23d0cd28574cdf926154f976d145eefa11eb756685b17910837313ba22c285b9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-f4941890db1436fd8b09d93b5644441ad6a3da5c100f80832509c217969fecfb23d0cd28574cdf926154f976d145eefa11eb756685b17910837313ba22c285b9"' :
                                        'id="xs-injectables-links-module-AppModule-f4941890db1436fd8b09d93b5644441ad6a3da5c100f80832509c217969fecfb23d0cd28574cdf926154f976d145eefa11eb756685b17910837313ba22c285b9"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DeviceOsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DeviceOsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FireAuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FireAuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ThemeService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ThemeService</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-AppModule-f4941890db1436fd8b09d93b5644441ad6a3da5c100f80832509c217969fecfb23d0cd28574cdf926154f976d145eefa11eb756685b17910837313ba22c285b9"' : 'data-target="#xs-pipes-links-module-AppModule-f4941890db1436fd8b09d93b5644441ad6a3da5c100f80832509c217969fecfb23d0cd28574cdf926154f976d145eefa11eb756685b17910837313ba22c285b9"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-AppModule-f4941890db1436fd8b09d93b5644441ad6a3da5c100f80832509c217969fecfb23d0cd28574cdf926154f976d145eefa11eb756685b17910837313ba22c285b9"' :
                                            'id="xs-pipes-links-module-AppModule-f4941890db1436fd8b09d93b5644441ad6a3da5c100f80832509c217969fecfb23d0cd28574cdf926154f976d145eefa11eb756685b17910837313ba22c285b9"' }>
                                            <li class="link">
                                                <a href="pipes/FilterAllPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilterAllPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/FilterPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilterPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
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
                                <a href="interfaces/IBottomBarOption.html" data-type="entity-link" >IBottomBarOption</a>
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
                                <a href="interfaces/IUser.html" data-type="entity-link" >IUser</a>
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