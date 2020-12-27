import {PubSub} from 'graphql-subscriptions';
import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type SigninResponse = {
  __typename?: 'SigninResponse';
  result: Scalars['String'];
  error?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  signin?: Maybe<SigninResponse>;
  signup?: Maybe<SignupResponse>;
  subCreate: SubCreateResponse;
};


export type MutationSigninArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationSignupArgs = {
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type SignupResponse = {
  __typename?: 'SignupResponse';
  result: Scalars['String'];
  error?: Maybe<Scalars['String']>;
};

export type SubCreateResponse = {
  __typename?: 'subCreateResponse';
  result: Scalars['String'];
};

export type SubTestResponse = {
  __typename?: 'SubTestResponse';
  result: Scalars['String'];
};

export type Subscription = {
  __typename?: 'Subscription';
  subTest: SubTestResponse;
};

export type HelloResponse = {
  __typename?: 'HelloResponse';
  result: Scalars['String'];
  error?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  hello: HelloResponse;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  SigninResponse: ResolverTypeWrapper<SigninResponse>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Mutation: ResolverTypeWrapper<{}>;
  SignupResponse: ResolverTypeWrapper<SignupResponse>;
  subCreateResponse: ResolverTypeWrapper<SubCreateResponse>;
  SubTestResponse: ResolverTypeWrapper<SubTestResponse>;
  Subscription: ResolverTypeWrapper<{}>;
  HelloResponse: ResolverTypeWrapper<HelloResponse>;
  Query: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  SigninResponse: SigninResponse;
  String: Scalars['String'];
  Mutation: {};
  SignupResponse: SignupResponse;
  subCreateResponse: SubCreateResponse;
  SubTestResponse: SubTestResponse;
  Subscription: {};
  HelloResponse: HelloResponse;
  Query: {};
  Boolean: Scalars['Boolean'];
};

export type SigninResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['SigninResponse'] = ResolversParentTypes['SigninResponse']> = {
  result?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  signin?: Resolver<Maybe<ResolversTypes['SigninResponse']>, ParentType, ContextType, RequireFields<MutationSigninArgs, 'email' | 'password'>>;
  signup?: Resolver<Maybe<ResolversTypes['SignupResponse']>, ParentType, ContextType, RequireFields<MutationSignupArgs, 'name' | 'email' | 'password'>>;
  subCreate?: Resolver<ResolversTypes['subCreateResponse'], ParentType, ContextType>;
};

export type SignupResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['SignupResponse'] = ResolversParentTypes['SignupResponse']> = {
  result?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubCreateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['subCreateResponse'] = ResolversParentTypes['subCreateResponse']> = {
  result?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubTestResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['SubTestResponse'] = ResolversParentTypes['SubTestResponse']> = {
  result?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = {
  subTest?: SubscriptionResolver<ResolversTypes['SubTestResponse'], "subTest", ParentType, ContextType>;
};

export type HelloResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['HelloResponse'] = ResolversParentTypes['HelloResponse']> = {
  result?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  hello?: Resolver<ResolversTypes['HelloResponse'], ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  SigninResponse?: SigninResponseResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  SignupResponse?: SignupResponseResolvers<ContextType>;
  subCreateResponse?: SubCreateResponseResolvers<ContextType>;
  SubTestResponse?: SubTestResponseResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  HelloResponse?: HelloResponseResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
