import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

@Component({
	selector: '.new-user',
	templateUrl: './new-user.component.html',
	styleUrls: ['./new-user.component.scss']
})

export class NewUserComponent implements OnInit, OnDestroy {

	constructor(
		private userSvc: UserService
	) { }

	private userCheckTimer: any;

	private usersSvcUnsub: Subject<any> = new Subject();

	userName: string = '';

	users: Array<any> = [];

	userExists: boolean;

	enableAdd: boolean = false;

	addRemoveUser(){
		if( this.userName ){
			this.userSvc.addUser(this.userName);
			this.userName = '';
		}
	}


	checkUserExists(event){
		let self = this;
		clearTimeout(this.userCheckTimer);
		this.userCheckTimer = setTimeout( () => {
			if(event.keyCode === 13 ){
				this.addRemoveUser();
			}
			self.userExists = this.users.length > -1 && this.users.indexOf(this.userName) > -1;
			self.enableAdd = !self.userExists;
		}, 250);
	}

	ngOnInit() {
		this.userSvc.getUsers()
			.pipe(
				map( users => this.users = users ),
				takeUntil( this.usersSvcUnsub )
			)
			.subscribe( users => this.users = users )
		;
	}

	ngOnDestroy() {
		this.usersSvcUnsub.next();
		this.usersSvcUnsub.complete();
	}

}
