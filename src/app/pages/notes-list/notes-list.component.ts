import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/shared/model';
import { NoteService } from 'src/app/shared/note.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {

  constructor(private noteService: NoteService) { }

  notes: Note[] = new Array<Note>();

  ngOnInit() {
    this.notes = this.noteService.getAll()
  }

  removenotes(id:number){
    this.noteService.delete(id)
  }

}
