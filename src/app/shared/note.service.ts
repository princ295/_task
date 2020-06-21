import { Injectable } from '@angular/core';
import { Note } from './model';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor() { }

  note: Note[] = new Array<Note>();

  getAll(){
    return this.note
  }

  get(id:number){
    return this.note[id]
  }

  getId(note_: Note){
    return this.note.indexOf(note_)
  }
// Inserting the new Notes to the array
  add(obj: Note){
    let newlenght = this.note.push(obj)
    let index = newlenght - 1
    return index
  }

  update(id: number,title:string,body:string){
   let _ = this.note[id]
   _.title = title
   _.body = body
  }

  delete(id: number){
    console.log(this.note)
    console.log(this.note.slice(id))
    this.note.slice(id)
    this.getAll()
  }

}
