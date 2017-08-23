import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from './../shared/services/user.service';
import { Component, OnDestroy } from '@angular/core';

@Component({
    selector: 'main-loading',
    template: ``
})
export class MainLoadingComponent {

    constructor(userService: UserService, route: ActivatedRoute, router: Router) {
        userService
            .getStartupInfo()
            .first()
            .subscribe(info => {
                router.navigate(['apps'], { relativeTo: route});
            });
    }
}
