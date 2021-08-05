import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import * as fromPosts from '../store'
import {SERVER} from '../../../environments';
import {mapTo} from 'rxjs/operators';

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
}
