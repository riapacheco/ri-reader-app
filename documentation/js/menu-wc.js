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
                                            'data-target="#components-links-module-AppModule-971c606380e6c6ab475cdb9ccad27121752a93af23842f3fc82d33c8dbb5722d51682cc0dee895267d162a77b33cf07dd867cd26056d658f7855ed5db8948e08"' : 'data-target="#xs-components-links-module-AppModule-971c606380e6c6ab475cdb9ccad27121752a93af23842f3fc82d33c8dbb5722d51682cc0dee895267d162a77b33cf07dd867cd26056d658f7855ed5db8948e08"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-971c606380e6c6ab475cdb9ccad27121752a93af23842f3fc82d33c8dbb5722d51682cc0dee895267d162a77b33cf07dd867cd26056d658f7855ed5db8948e08"' :
                                            'id="xs-components-links-module-AppModule-971c606380e6c6ab475cdb9ccad27121752a93af23842f3fc82d33c8dbb5722d51682cc0dee895267d162a77b33cf07dd867cd26056d658f7855ed5db8948e08"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BottomNavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BottomNavComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FloatingMenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FloatingMenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoadingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoadingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoadingOverlayComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoadingOverlayComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginRegisterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginRegisterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OverlayComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OverlayComponent</a>
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
                                        'data-target="#injectables-links-module-AppModule-971c606380e6c6ab475cdb9ccad27121752a93af23842f3fc82d33c8dbb5722d51682cc0dee895267d162a77b33cf07dd867cd26056d658f7855ed5db8948e08"' : 'data-target="#xs-injectables-links-module-AppModule-971c606380e6c6ab475cdb9ccad27121752a93af23842f3fc82d33c8dbb5722d51682cc0dee895267d162a77b33cf07dd867cd26056d658f7855ed5db8948e08"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-971c606380e6c6ab475cdb9ccad27121752a93af23842f3fc82d33c8dbb5722d51682cc0dee895267d162a77b33cf07dd867cd26056d658f7855ed5db8948e08"' :
                                        'id="xs-injectables-links-module-AppModule-971c606380e6c6ab475cdb9ccad27121752a93af23842f3fc82d33c8dbb5722d51682cc0dee895267d162a77b33cf07dd867cd26056d658f7855ed5db8948e08"' }>
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
                                <a href="modules/BookModule.html" data-type="entity-link" >BookModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BookModule-063212e6250c53675a92e27e38d83958486b6828bc6f0030c3cfb41278c40070e4bcffce8244bbffb94794e1f976f4af4d45a32618e493c34c2ab7ff3cc96d8f"' : 'data-target="#xs-components-links-module-BookModule-063212e6250c53675a92e27e38d83958486b6828bc6f0030c3cfb41278c40070e4bcffce8244bbffb94794e1f976f4af4d45a32618e493c34c2ab7ff3cc96d8f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BookModule-063212e6250c53675a92e27e38d83958486b6828bc6f0030c3cfb41278c40070e4bcffce8244bbffb94794e1f976f4af4d45a32618e493c34c2ab7ff3cc96d8f"' :
                                            'id="xs-components-links-module-BookModule-063212e6250c53675a92e27e38d83958486b6828bc6f0030c3cfb41278c40070e4bcffce8244bbffb94794e1f976f4af4d45a32618e493c34c2ab7ff3cc96d8f"' }>
                                            <li class="link">
                                                <a href="components/BookCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BookCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BooksComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BooksComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-BookModule-063212e6250c53675a92e27e38d83958486b6828bc6f0030c3cfb41278c40070e4bcffce8244bbffb94794e1f976f4af4d45a32618e493c34c2ab7ff3cc96d8f"' : 'data-target="#xs-injectables-links-module-BookModule-063212e6250c53675a92e27e38d83958486b6828bc6f0030c3cfb41278c40070e4bcffce8244bbffb94794e1f976f4af4d45a32618e493c34c2ab7ff3cc96d8f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-BookModule-063212e6250c53675a92e27e38d83958486b6828bc6f0030c3cfb41278c40070e4bcffce8244bbffb94794e1f976f4af4d45a32618e493c34c2ab7ff3cc96d8f"' :
                                        'id="xs-injectables-links-module-BookModule-063212e6250c53675a92e27e38d83958486b6828bc6f0030c3cfb41278c40070e4bcffce8244bbffb94794e1f976f4af4d45a32618e493c34c2ab7ff3cc96d8f"' }>
                                        <li class="link">
                                            <a href="injectables/BookService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BookService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/BookRoutingModule.html" data-type="entity-link" >BookRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CaptureModule.html" data-type="entity-link" >CaptureModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CaptureModule-d2f77c7e5ff5a9c103db3d46f1fde79976e0485851c0c306f224e01c61aab37d9e1aedfa63851d6474fab37622acd7a0071e61c62dfbda8f8daf760d194d8442"' : 'data-target="#xs-components-links-module-CaptureModule-d2f77c7e5ff5a9c103db3d46f1fde79976e0485851c0c306f224e01c61aab37d9e1aedfa63851d6474fab37622acd7a0071e61c62dfbda8f8daf760d194d8442"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CaptureModule-d2f77c7e5ff5a9c103db3d46f1fde79976e0485851c0c306f224e01c61aab37d9e1aedfa63851d6474fab37622acd7a0071e61c62dfbda8f8daf760d194d8442"' :
                                            'id="xs-components-links-module-CaptureModule-d2f77c7e5ff5a9c103db3d46f1fde79976e0485851c0c306f224e01c61aab37d9e1aedfa63851d6474fab37622acd7a0071e61c62dfbda8f8daf760d194d8442"' }>
                                            <li class="link">
                                                <a href="components/CaptureComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CaptureComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CaptureModule-d2f77c7e5ff5a9c103db3d46f1fde79976e0485851c0c306f224e01c61aab37d9e1aedfa63851d6474fab37622acd7a0071e61c62dfbda8f8daf760d194d8442"' : 'data-target="#xs-injectables-links-module-CaptureModule-d2f77c7e5ff5a9c103db3d46f1fde79976e0485851c0c306f224e01c61aab37d9e1aedfa63851d6474fab37622acd7a0071e61c62dfbda8f8daf760d194d8442"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CaptureModule-d2f77c7e5ff5a9c103db3d46f1fde79976e0485851c0c306f224e01c61aab37d9e1aedfa63851d6474fab37622acd7a0071e61c62dfbda8f8daf760d194d8442"' :
                                        'id="xs-injectables-links-module-CaptureModule-d2f77c7e5ff5a9c103db3d46f1fde79976e0485851c0c306f224e01c61aab37d9e1aedfa63851d6474fab37622acd7a0071e61c62dfbda8f8daf760d194d8442"' }>
                                        <li class="link">
                                            <a href="injectables/CameraService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CameraService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CaptureRoutingModule.html" data-type="entity-link" >CaptureRoutingModule</a>
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
                                        'data-target="#directives-links-module-SharedModule-4c1bfd78123ec44bfed59bf2c00211bbca7268304d25f265d1335e7057d1cdcf2fba622cc871d6c51d42606703aab94ea9f58bd72366cf3e5c8d9f31aada08d7"' : 'data-target="#xs-directives-links-module-SharedModule-4c1bfd78123ec44bfed59bf2c00211bbca7268304d25f265d1335e7057d1cdcf2fba622cc871d6c51d42606703aab94ea9f58bd72366cf3e5c8d9f31aada08d7"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SharedModule-4c1bfd78123ec44bfed59bf2c00211bbca7268304d25f265d1335e7057d1cdcf2fba622cc871d6c51d42606703aab94ea9f58bd72366cf3e5c8d9f31aada08d7"' :
                                        'id="xs-directives-links-module-SharedModule-4c1bfd78123ec44bfed59bf2c00211bbca7268304d25f265d1335e7057d1cdcf2fba622cc871d6c51d42606703aab94ea9f58bd72366cf3e5c8d9f31aada08d7"' }>
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
                                        'data-target="#injectables-links-module-SharedModule-4c1bfd78123ec44bfed59bf2c00211bbca7268304d25f265d1335e7057d1cdcf2fba622cc871d6c51d42606703aab94ea9f58bd72366cf3e5c8d9f31aada08d7"' : 'data-target="#xs-injectables-links-module-SharedModule-4c1bfd78123ec44bfed59bf2c00211bbca7268304d25f265d1335e7057d1cdcf2fba622cc871d6c51d42606703aab94ea9f58bd72366cf3e5c8d9f31aada08d7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SharedModule-4c1bfd78123ec44bfed59bf2c00211bbca7268304d25f265d1335e7057d1cdcf2fba622cc871d6c51d42606703aab94ea9f58bd72366cf3e5c8d9f31aada08d7"' :
                                        'id="xs-injectables-links-module-SharedModule-4c1bfd78123ec44bfed59bf2c00211bbca7268304d25f265d1335e7057d1cdcf2fba622cc871d6c51d42606703aab94ea9f58bd72366cf3e5c8d9f31aada08d7"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DeviceOsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DeviceOsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LoadingOverlayService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoadingOverlayService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ThemeService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ThemeService</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-SharedModule-4c1bfd78123ec44bfed59bf2c00211bbca7268304d25f265d1335e7057d1cdcf2fba622cc871d6c51d42606703aab94ea9f58bd72366cf3e5c8d9f31aada08d7"' : 'data-target="#xs-pipes-links-module-SharedModule-4c1bfd78123ec44bfed59bf2c00211bbca7268304d25f265d1335e7057d1cdcf2fba622cc871d6c51d42606703aab94ea9f58bd72366cf3e5c8d9f31aada08d7"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-SharedModule-4c1bfd78123ec44bfed59bf2c00211bbca7268304d25f265d1335e7057d1cdcf2fba622cc871d6c51d42606703aab94ea9f58bd72366cf3e5c8d9f31aada08d7"' :
                                            'id="xs-pipes-links-module-SharedModule-4c1bfd78123ec44bfed59bf2c00211bbca7268304d25f265d1335e7057d1cdcf2fba622cc871d6c51d42606703aab94ea9f58bd72366cf3e5c8d9f31aada08d7"' }>
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
                                <a href="classes/BookCardState.html" data-type="entity-link" >BookCardState</a>
                            </li>
                            <li class="link">
                                <a href="classes/IBookCardState.html" data-type="entity-link" >IBookCardState</a>
                            </li>
                            <li class="link">
                                <a href="classes/Passage.html" data-type="entity-link" >Passage</a>
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
                                    <a href="injectables/BookService.html" data-type="entity-link" >BookService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CameraService.html" data-type="entity-link" >CameraService</a>
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
                                <a href="interfaces/IBookScoreCategory.html" data-type="entity-link" >IBookScoreCategory</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBookScoreTotal.html" data-type="entity-link" >IBookScoreTotal</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBookSummary.html" data-type="entity-link" >IBookSummary</a>
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