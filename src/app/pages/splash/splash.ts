import { Component, OnInit, inject } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    templateUrl: './splash.html',
    selector: 'splash',
    styleUrls: ['./splash.scss']
})
export class Splash implements OnInit {


    router = inject(Router)

    ngOnInit(): void {
        setTimeout(() => {
            this.router.navigate(['login'])
        }, 5000)
    }

}