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
                                            'data-target="#components-links-module-AppModule-d8e0af183d1bb8e6f0a816b40743aa38218dd303cab7189bd6545c371ed976c2e044af84335495b56fa7150bb43944d424db53f2f633a8471abe035fcba27340"' : 'data-target="#xs-components-links-module-AppModule-d8e0af183d1bb8e6f0a816b40743aa38218dd303cab7189bd6545c371ed976c2e044af84335495b56fa7150bb43944d424db53f2f633a8471abe035fcba27340"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-d8e0af183d1bb8e6f0a816b40743aa38218dd303cab7189bd6545c371ed976c2e044af84335495b56fa7150bb43944d424db53f2f633a8471abe035fcba27340"' :
                                            'id="xs-components-links-module-AppModule-d8e0af183d1bb8e6f0a816b40743aa38218dd303cab7189bd6545c371ed976c2e044af84335495b56fa7150bb43944d424db53f2f633a8471abe035fcba27340"' }>
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
                                                <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginRegisterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginRegisterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PassagesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PassagesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StatusBarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StatusBarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TopNavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TopNavComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BookModule.html" data-type="entity-link" >BookModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BookRoutingModule.html" data-type="entity-link" >BookRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardModule.html" data-type="entity-link" >DashboardModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardRoutingModule.html" data-type="entity-link" >DashboardRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PassagesModule.html" data-type="entity-link" >PassagesModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PassagesRoutingModule.html" data-type="entity-link" >PassagesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-SharedModule-04171eb64464f6d9af4e37fa3cf5802d1f40f2d8b862ee78b65bf55b439b618f90a9b55969eba86260475d687398064631d7c6a2d62f8396bf8dcd1b269e1d13"' : 'data-target="#xs-directives-links-module-SharedModule-04171eb64464f6d9af4e37fa3cf5802d1f40f2d8b862ee78b65bf55b439b618f90a9b55969eba86260475d687398064631d7c6a2d62f8396bf8dcd1b269e1d13"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SharedModule-04171eb64464f6d9af4e37fa3cf5802d1f40f2d8b862ee78b65bf55b439b618f90a9b55969eba86260475d687398064631d7c6a2d62f8396bf8dcd1b269e1d13"' :
                                        'id="xs-directives-links-module-SharedModule-04171eb64464f6d9af4e37fa3cf5802d1f40f2d8b862ee78b65bf55b439b618f90a9b55969eba86260475d687398064631d7c6a2d62f8396bf8dcd1b269e1d13"' }>
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
                                        'data-target="#injectables-links-module-SharedModule-04171eb64464f6d9af4e37fa3cf5802d1f40f2d8b862ee78b65bf55b439b618f90a9b55969eba86260475d687398064631d7c6a2d62f8396bf8dcd1b269e1d13"' : 'data-target="#xs-injectables-links-module-SharedModule-04171eb64464f6d9af4e37fa3cf5802d1f40f2d8b862ee78b65bf55b439b618f90a9b55969eba86260475d687398064631d7c6a2d62f8396bf8dcd1b269e1d13"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SharedModule-04171eb64464f6d9af4e37fa3cf5802d1f40f2d8b862ee78b65bf55b439b618f90a9b55969eba86260475d687398064631d7c6a2d62f8396bf8dcd1b269e1d13"' :
                                        'id="xs-injectables-links-module-SharedModule-04171eb64464f6d9af4e37fa3cf5802d1f40f2d8b862ee78b65bf55b439b618f90a9b55969eba86260475d687398064631d7c6a2d62f8396bf8dcd1b269e1d13"' }>
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
                                            <a href="injectables/SupabaseService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SupabaseService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ThemeService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ThemeService</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-SharedModule-04171eb64464f6d9af4e37fa3cf5802d1f40f2d8b862ee78b65bf55b439b618f90a9b55969eba86260475d687398064631d7c6a2d62f8396bf8dcd1b269e1d13"' : 'data-target="#xs-pipes-links-module-SharedModule-04171eb64464f6d9af4e37fa3cf5802d1f40f2d8b862ee78b65bf55b439b618f90a9b55969eba86260475d687398064631d7c6a2d62f8396bf8dcd1b269e1d13"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-SharedModule-04171eb64464f6d9af4e37fa3cf5802d1f40f2d8b862ee78b65bf55b439b618f90a9b55969eba86260475d687398064631d7c6a2d62f8396bf8dcd1b269e1d13"' :
                                            'id="xs-pipes-links-module-SharedModule-04171eb64464f6d9af4e37fa3cf5802d1f40f2d8b862ee78b65bf55b439b618f90a9b55969eba86260475d687398064631d7c6a2d62f8396bf8dcd1b269e1d13"' }>
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
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Book.html" data-type="entity-link" >Book</a>
                            </li>
                            <li class="link">
                                <a href="classes/BookList.html" data-type="entity-link" >BookList</a>
                            </li>
                            <li class="link">
                                <a href="classes/Passage.html" data-type="entity-link" >Passage</a>
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
                                <a href="interfaces/INavButton.html" data-type="entity-link" >INavButton</a>
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