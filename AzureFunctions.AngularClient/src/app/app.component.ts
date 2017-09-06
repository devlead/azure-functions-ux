import { BackgroundTasksService } from './shared/services/background-tasks.service';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';


import { FunctionApp } from './shared/function-app';
import { BusyStateComponent } from './busy-state/busy-state.component';
import { StartupInfo } from './shared/models/portal';
import { BroadcastService } from './shared/services/broadcast.service';
import { FunctionContainer } from './shared/models/function-container';
import { GlobalStateService } from './shared/services/global-state.service';
import { UserService } from './shared/services/user.service';
import { ConfigService } from './shared/services/config.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, AfterViewInit {
    // public gettingStarted: boolean;
    // public ready: boolean;
    public showTryLanding: boolean;
    public tryFunctionApp: FunctionApp;

    private _startupInfo: StartupInfo;
    @ViewChild(BusyStateComponent) busyStateComponent: BusyStateComponent;

    constructor(
        private _configService: ConfigService,
        private _userService: UserService,
        private _globalStateService: GlobalStateService,
        // Although we are not using BackgroundTasksService, we need to reference it here.
        // Otherwise, Angular won't new it up, and it's needed for local development
        // for retrieving and updating the token.
        _backgroundTasksService: BackgroundTasksService,
        private _broadcastService: BroadcastService,
        private _router: Router,
        route: ActivatedRoute
    ) {
        // this.ready = false;

        // this._router.navigate(['']);
        // this._globalStateService.setBusyState();

        // TODO: for now we don't honor any deep links.  We'll need to make a bunch of updates to our
        // tree logic in order to get it working properly
        if (!this._userService.inIFrame && window.location.protocol !== 'http:' && !this._userService.inTab) {
            this._router.navigate(['/landing']);
        } else {
            this._router.navigate(['/main/apps']);
        }


        this.showTryLanding = window.location.pathname.endsWith('/try');

        // if (_userService.inIFrame || window.location.protocol === 'http:' || _userService.inTab) {
        //     this.gettingStarted = false;
        //     return;
        // } else {
        //     this.gettingStarted = true;
        // }
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this._globalStateService.GlobalBusyStateComponent = this.busyStateComponent;
    }

    initializeTryDashboard(functionApp: FunctionApp) {
        this._globalStateService.setBusyState();
        this._broadcastService.clearAllDirtyStates();
        // this.gettingStarted = false;
        this.showTryLanding = false;
        this.tryFunctionApp = functionApp;
    }
}
