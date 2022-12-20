import { Injectable } from '@angular/core';
import { Storage, ref } from '@angular/fire/storage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {

  constructor(private storage: Storage) { }

  uploadImage(image: File, path: String): Observable<string> {

    const ref1 = ref(this.storage, path)
  }
}
