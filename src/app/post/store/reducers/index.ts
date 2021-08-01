import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromPosts from './post.reducer';

export * from './post.reducer';

export const getPostsState = createFeatureSelector<fromPosts.PostState>('posts');
export const getPosts = createSelector(getPostsState, fromPosts.getPosts);