import { Injectable } from '@angular/core';
import{Observable} from 'rxjs';
import{HttpClient,HttpErrorResponse,HttpParams,HttpHeaders} from '@angular/common/http'
import * as io from 'socket.io-client'
import {Cookie} from 'ng2-cookies/ng2-cookies'
import { ObserveOnOperator } from 'rxjs/internal/operators/observeOn';
import{tap,catchError}from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private url="https://chatapi.edwisor.com"
  private socket;
  constructor(public http:HttpClient) {this.socket=io(this.url) }

  public missedChat:any=(userId)=>{
    console.log('ready')
    return( this.http.get(`${this.url}/api/v1/chat/unseen/user/list?userId=${userId}&authToken=${Cookie.get('authtoken')}`))
   
    }
    public number:any=(userId,senderId)=>{
      console.log('ready')
      return( this.http.get(`${this.url}/api/v1/chat/count/unseen?userId=${userId}&senderId=${senderId}&authToken=${Cookie.get('authtoken')}`))
     
      }
public verifyUser=()=>{
  return Observable.create((observer)=>{
    this.socket.on('verifyUser',(data)=>{
      observer.next(data)
    })
  })
}

public onlineUserList=()=>{
return Observable.create((observer)=>{
  this.socket.on('online-user-list',(userList)=>{
    observer.next(userList)
  })
})
}

public chatByUserId=(userId)=>{
  return Observable.create((observer)=>{
    this.socket.on(userId,(data)=>{
      observer.next(data)
    })
  })
  }

public disconnectedSocket=()=>{
  return Observable.create((observer)=>{
    this.socket.on('disconnectedSocket',()=>{
      observer.next()
    })
  })
  }
  
  public setUser=(authToken)=>{
    this.socket.emit('set-user',authToken)
  }

  public SendChatMessage=(data)=>{
    this.socket.emit('chat-msg',data)
  }
  
  private handleError(err: HttpErrorResponse) {

    let errorMessage = '';

    if (err.error instanceof Error) {

      errorMessage = `An error occurred: ${err.error.message}`;

    } else {

      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;

    } // end condition *if

    console.error(errorMessage);

    return Observable.throw(errorMessage);

  }  // END handleError

  public markChatAsSeen = (userDetails) => {

    this.socket.emit('mark-chat-as-seen', userDetails);

  } // end markChatAsSeen  

  public getChat(senderId, receiverId, skip): Observable<any> {

    return this.http.get(`${this.url}/api/v1/chat/get/for/user?senderId=${senderId}&receiverId=${receiverId}&skip=${skip}&authToken=${Cookie.get('authtoken')}`)
      .pipe(tap(data => console.log('Data Received')))
      catchError(this.handleError);

  } 

  public exitSocket = () =>{


    this.socket.disconnect();


  }// end exit socket




}
