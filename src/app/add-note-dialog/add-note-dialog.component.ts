import { Component, Output, EventEmitter } from '@angular/core';
import { Note } from '../interfaces/note.interface';
import { NoteListService } from '../firebase-services/note-list.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-note-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-note-dialog.component.html',
  styleUrl: './add-note-dialog.component.scss',
})
export class AddNoteDialogComponent {
  @Output() addDialogClosed: EventEmitter<boolean> = new EventEmitter();
  title = '';
  description = '';

  constructor(public noteService: NoteListService) {}

  closeDialog() {
    this.title = '';
    this.description = '';
    this.addDialogClosed.emit(false);
  }

  addNote() {
    let note: Note = {
      type: 'note',
      title: this.title,
      content: this.description,
      marked: false,
    };

    if (note.type == 'note') {
      this.noteService.addNote(note, 'notes');
    } else {
      this.noteService.addNote(note, 'trash');
    }
    this.closeDialog();
  }
}
