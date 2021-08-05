import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SERVER} from '../../../environments';
import {mapTo} from 'rxjs/operators';

import * as fromPosts from '../store'
import * as fromDto from '../dto';

const POST_URI = '/posts'

@Injectable()
export class PostService {

  constructor(
    private readonly http: HttpClient
  ) {}

  fetchPosts(): Observable<fromPosts.Post[]> {
    return this.http.get<fromPosts.Post[]>(`${SERVER.URL_API}${POST_URI}`);
  }

  removePost(id: number): Observable<number> {
    return this.http.delete<fromPosts.Post[]>(`${SERVER.URL_API}${POST_URI}/${id}`)
      .pipe(
        mapTo(id)
      );
  }

  addPost(addPostRequest: fromDto.AddPostRequest): Observable<fromPosts.Post> {
    return this.http.post<fromPosts.Post>(`${SERVER.URL_API}${POST_URI}`, addPostRequest);
  }
}
