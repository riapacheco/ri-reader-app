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
                                            'data-target="#components-links-module-AppModule-c45d199479b18aff09a96eb8c1f922ec4bdd60429f4ca599da8a048eb39f5e8f9df1212400e1c721132ccc26129ebc091a678c48cc7f3259a9b421be0869528c"' : 'data-target="#xs-components-links-module-AppModule-c45d199479b18aff09a96eb8c1f922ec4bdd60429f4ca599da8a048eb39f5e8f9df1212400e1c721132ccc26129ebc091a678c48cc7f3259a9b421be0869528c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-c45d199479b18aff09a96eb8c1f922ec4bdd60429f4ca599da8a048eb39f5e8f9df1212400e1c721132ccc26129ebc091a678c48cc7f3259a9b421be0869528c"' :
                                            'id="xs-components-links-module-AppModule-c45d199479b18aff09a96eb8c1f922ec4bdd60429f4ca599da8a048eb39f5e8f9df1212400e1c721132ccc26129ebc091a678c48cc7f3259a9b421be0869528c"' }>
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
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-AppModule-c45d199479b18aff09a96eb8c1f922ec4bdd60429f4ca599da8a048eb39f5e8f9df1212400e1c721132ccc26129ebc091a678c48cc7f3259a9b421be0869528c"' : 'data-target="#xs-directives-links-module-AppModule-c45d199479b18aff09a96eb8c1f922ec4bdd60429f4ca599da8a048eb39f5e8f9df1212400e1c721132ccc26129ebc091a678c48cc7f3259a9b421be0869528c"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-AppModule-c45d199479b18aff09a96eb8c1f922ec4bdd60429f4ca599da8a048eb39f5e8f9df1212400e1c721132ccc26129ebc091a678c48cc7f3259a9b421be0869528c"' :
                                        'id="xs-directives-links-module-AppModule-c45d199479b18aff09a96eb8c1f922ec4bdd60429f4ca599da8a048eb39f5e8f9df1212400e1c721132ccc26129ebc091a678c48cc7f3259a9b421be0869528c"' }>
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
                                        'data-target="#injectables-links-module-AppModule-c45d199479b18aff09a96eb8c1f922ec4bdd60429f4ca599da8a048eb39f5e8f9df1212400e1c721132ccc26129ebc091a678c48cc7f3259a9b421be0869528c"' : 'data-target="#xs-injectables-links-module-AppModule-c45d199479b18aff09a96eb8c1f922ec4bdd60429f4ca599da8a048eb39f5e8f9df1212400e1c721132ccc26129ebc091a678c48cc7f3259a9b421be0869528c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-c45d199479b18aff09a96eb8c1f922ec4bdd60429f4ca599da8a048eb39f5e8f9df1212400e1c721132ccc26129ebc091a678c48cc7f3259a9b421be0869528c"' :
                                        'id="xs-injectables-links-module-AppModule-c45d199479b18aff09a96eb8c1f922ec4bdd60429f4ca599da8a048eb39f5e8f9df1212400e1c721132ccc26129ebc091a678c48cc7f3259a9b421be0869528c"' }>
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
                                            'data-target="#pipes-links-module-AppModule-c45d199479b18aff09a96eb8c1f922ec4bdd60429f4ca599da8a048eb39f5e8f9df1212400e1c721132ccc26129ebc091a678c48cc7f3259a9b421be0869528c"' : 'data-target="#xs-pipes-links-module-AppModule-c45d199479b18aff09a96eb8c1f922ec4bdd60429f4ca599da8a048eb39f5e8f9df1212400e1c721132ccc26129ebc091a678c48cc7f3259a9b421be0869528c"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-AppModule-c45d199479b18aff09a96eb8c1f922ec4bdd60429f4ca599da8a048eb39f5e8f9df1212400e1c721132ccc26129ebc091a678c48cc7f3259a9b421be0869528c"' :
                                            'id="xs-pipes-links-module-AppModule-c45d199479b18aff09a96eb8c1f922ec4bdd60429f4ca599da8a048eb39f5e8f9df1212400e1c721132ccc26129ebc091a678c48cc7f3259a9b421be0869528c"' }>
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
                                <a href="interfaces/IBook.html" data-type="entity-link" >IBook</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBookGenre.html" data-type="entity-link" >IBookGenre</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBookGenresRelation.html" data-type="entity-link" >IBookGenresRelation</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBookPassagesRelation.html" data-type="entity-link" >IBookPassagesRelation</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBookScoreCategoriesRelation.html" data-type="entity-link" >IBookScoreCategoriesRelation</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBookScoreCategory.html" data-type="entity-link" >IBookScoreCategory</a>
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
                                <a href="interfaces/IPassageNotesRelation.html" data-type="entity-link" >IPassageNotesRelation</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPassageTag.html" data-type="entity-link" >IPassageTag</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPassageTagsRelation.html" data-type="entity-link" >IPassageTagsRelation</a>
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