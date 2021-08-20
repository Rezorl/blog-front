import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromPosts from './post.reducer';

export * from './post.reducer';

export const getPostsState = createFeatureSelector<fromPosts.PostState>('posts');
export const getPosts = createSelector(getPostsState, fromPosts.getPosts);
export const getLoading = createSelector(getPostsState, fromPosts.getLoading);
export const getAdding = createSelector(getPostsState, fromPosts.getAdding);
export const getLoaded = createSelector(getPostsState, fromPosts.getLoaded);
