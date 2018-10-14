import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Subscription } from 'rxjs';

@Component({
	selector: '.list-users',
	templateUrl: './list-users.component.html',
	styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

	constructor(
		private userSvc: UserService
	) { }

	private commonSub: Subscription;

	users: Array<any>;

	removeUser(index){
		if( this.users[index] ){
			this.users.splice(index, 1);
		}
	}

	ngOnInit() {
		this.commonSub = this.userSvc.getUsers().subscribe( (users) => {
			this.users = users;
		});
	}

}
