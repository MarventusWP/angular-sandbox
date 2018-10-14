import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class UserService {

	constructor(
		private http: HttpClient
	) { }

	private users = [];

	addUser(user: string): void {
		if( !user ) return;
		if( this.users.indexOf(user) < 0 ){
			this.users.push(user);
		} else {
			this.users.splice(this.users.indexOf(user), 1);
		}
	}

	getUsers(): Observable<any> {
		return of(this.users);
	}

}
