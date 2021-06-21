import {
  ResponseResolver,
  RestRequest,
  DefaultRequestBody,
  RequestParams,
  RestContext,
} from 'msw';

export type Resolver = ResponseResolver<
  RestRequest<DefaultRequestBody, RequestParams>,
  RestContext
>;
