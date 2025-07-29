
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model AuthenticatedUser
 * 
 */
export type AuthenticatedUser = $Result.DefaultSelection<Prisma.$AuthenticatedUserPayload>
/**
 * Model ProjectTicket
 * 
 */
export type ProjectTicket = $Result.DefaultSelection<Prisma.$ProjectTicketPayload>
/**
 * Model CareerTicket
 * 
 */
export type CareerTicket = $Result.DefaultSelection<Prisma.$CareerTicketPayload>
/**
 * Model Image
 * 
 */
export type Image = $Result.DefaultSelection<Prisma.$ImagePayload>
/**
 * Model ImageCollection
 * 
 */
export type ImageCollection = $Result.DefaultSelection<Prisma.$ImageCollectionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  VIEWER: 'VIEWER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const ProjectType: {
  CUSTOM_HOME: 'CUSTOM_HOME',
  BATHROOM_REMODEL: 'BATHROOM_REMODEL',
  KITCHEN_REMODEL: 'KITCHEN_REMODEL',
  FENCES: 'FENCES',
  PATIO: 'PATIO',
  FLOORING: 'FLOORING',
  PAINTING: 'PAINTING',
  ROOFING: 'ROOFING',
  CONCRETE: 'CONCRETE',
  WINDOWS: 'WINDOWS',
  OTHER: 'OTHER'
};

export type ProjectType = (typeof ProjectType)[keyof typeof ProjectType]


export const ProjectStatus: {
  UNCONFIRMED: 'UNCONFIRMED',
  CONFIRMED: 'CONFIRMED',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type ProjectStatus = (typeof ProjectStatus)[keyof typeof ProjectStatus]


export const ProjectStart: {
  ASAP: 'ASAP',
  NEXT_3_MONTHS: 'NEXT_3_MONTHS',
  NEXT_6_MONTHS: 'NEXT_6_MONTHS',
  NEXT_6_MONTHS_PLUS: 'NEXT_6_MONTHS_PLUS'
};

export type ProjectStart = (typeof ProjectStart)[keyof typeof ProjectStart]


export const FileType: {
  PDF: 'PDF',
  DOC: 'DOC',
  DOCX: 'DOCX'
};

export type FileType = (typeof FileType)[keyof typeof FileType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type ProjectType = $Enums.ProjectType

export const ProjectType: typeof $Enums.ProjectType

export type ProjectStatus = $Enums.ProjectStatus

export const ProjectStatus: typeof $Enums.ProjectStatus

export type ProjectStart = $Enums.ProjectStart

export const ProjectStart: typeof $Enums.ProjectStart

export type FileType = $Enums.FileType

export const FileType: typeof $Enums.FileType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more AuthenticatedUsers
 * const authenticatedUsers = await prisma.authenticatedUser.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more AuthenticatedUsers
   * const authenticatedUsers = await prisma.authenticatedUser.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.authenticatedUser`: Exposes CRUD operations for the **AuthenticatedUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuthenticatedUsers
    * const authenticatedUsers = await prisma.authenticatedUser.findMany()
    * ```
    */
  get authenticatedUser(): Prisma.AuthenticatedUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectTicket`: Exposes CRUD operations for the **ProjectTicket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectTickets
    * const projectTickets = await prisma.projectTicket.findMany()
    * ```
    */
  get projectTicket(): Prisma.ProjectTicketDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.careerTicket`: Exposes CRUD operations for the **CareerTicket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CareerTickets
    * const careerTickets = await prisma.careerTicket.findMany()
    * ```
    */
  get careerTicket(): Prisma.CareerTicketDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.image`: Exposes CRUD operations for the **Image** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.image.findMany()
    * ```
    */
  get image(): Prisma.ImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.imageCollection`: Exposes CRUD operations for the **ImageCollection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ImageCollections
    * const imageCollections = await prisma.imageCollection.findMany()
    * ```
    */
  get imageCollection(): Prisma.ImageCollectionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    AuthenticatedUser: 'AuthenticatedUser',
    ProjectTicket: 'ProjectTicket',
    CareerTicket: 'CareerTicket',
    Image: 'Image',
    ImageCollection: 'ImageCollection'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "authenticatedUser" | "projectTicket" | "careerTicket" | "image" | "imageCollection"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      AuthenticatedUser: {
        payload: Prisma.$AuthenticatedUserPayload<ExtArgs>
        fields: Prisma.AuthenticatedUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuthenticatedUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatedUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuthenticatedUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatedUserPayload>
          }
          findFirst: {
            args: Prisma.AuthenticatedUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatedUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuthenticatedUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatedUserPayload>
          }
          findMany: {
            args: Prisma.AuthenticatedUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatedUserPayload>[]
          }
          create: {
            args: Prisma.AuthenticatedUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatedUserPayload>
          }
          createMany: {
            args: Prisma.AuthenticatedUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AuthenticatedUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatedUserPayload>
          }
          update: {
            args: Prisma.AuthenticatedUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatedUserPayload>
          }
          deleteMany: {
            args: Prisma.AuthenticatedUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuthenticatedUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AuthenticatedUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthenticatedUserPayload>
          }
          aggregate: {
            args: Prisma.AuthenticatedUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthenticatedUser>
          }
          groupBy: {
            args: Prisma.AuthenticatedUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthenticatedUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuthenticatedUserCountArgs<ExtArgs>
            result: $Utils.Optional<AuthenticatedUserCountAggregateOutputType> | number
          }
        }
      }
      ProjectTicket: {
        payload: Prisma.$ProjectTicketPayload<ExtArgs>
        fields: Prisma.ProjectTicketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectTicketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTicketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectTicketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTicketPayload>
          }
          findFirst: {
            args: Prisma.ProjectTicketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTicketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectTicketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTicketPayload>
          }
          findMany: {
            args: Prisma.ProjectTicketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTicketPayload>[]
          }
          create: {
            args: Prisma.ProjectTicketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTicketPayload>
          }
          createMany: {
            args: Prisma.ProjectTicketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProjectTicketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTicketPayload>
          }
          update: {
            args: Prisma.ProjectTicketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTicketPayload>
          }
          deleteMany: {
            args: Prisma.ProjectTicketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectTicketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProjectTicketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTicketPayload>
          }
          aggregate: {
            args: Prisma.ProjectTicketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectTicket>
          }
          groupBy: {
            args: Prisma.ProjectTicketGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectTicketGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectTicketCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectTicketCountAggregateOutputType> | number
          }
        }
      }
      CareerTicket: {
        payload: Prisma.$CareerTicketPayload<ExtArgs>
        fields: Prisma.CareerTicketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CareerTicketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerTicketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CareerTicketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerTicketPayload>
          }
          findFirst: {
            args: Prisma.CareerTicketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerTicketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CareerTicketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerTicketPayload>
          }
          findMany: {
            args: Prisma.CareerTicketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerTicketPayload>[]
          }
          create: {
            args: Prisma.CareerTicketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerTicketPayload>
          }
          createMany: {
            args: Prisma.CareerTicketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CareerTicketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerTicketPayload>
          }
          update: {
            args: Prisma.CareerTicketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerTicketPayload>
          }
          deleteMany: {
            args: Prisma.CareerTicketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CareerTicketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CareerTicketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareerTicketPayload>
          }
          aggregate: {
            args: Prisma.CareerTicketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCareerTicket>
          }
          groupBy: {
            args: Prisma.CareerTicketGroupByArgs<ExtArgs>
            result: $Utils.Optional<CareerTicketGroupByOutputType>[]
          }
          count: {
            args: Prisma.CareerTicketCountArgs<ExtArgs>
            result: $Utils.Optional<CareerTicketCountAggregateOutputType> | number
          }
        }
      }
      Image: {
        payload: Prisma.$ImagePayload<ExtArgs>
        fields: Prisma.ImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findFirst: {
            args: Prisma.ImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findMany: {
            args: Prisma.ImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          create: {
            args: Prisma.ImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          createMany: {
            args: Prisma.ImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          update: {
            args: Prisma.ImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          deleteMany: {
            args: Prisma.ImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          aggregate: {
            args: Prisma.ImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImage>
          }
          groupBy: {
            args: Prisma.ImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImageCountArgs<ExtArgs>
            result: $Utils.Optional<ImageCountAggregateOutputType> | number
          }
        }
      }
      ImageCollection: {
        payload: Prisma.$ImageCollectionPayload<ExtArgs>
        fields: Prisma.ImageCollectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImageCollectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageCollectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImageCollectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageCollectionPayload>
          }
          findFirst: {
            args: Prisma.ImageCollectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageCollectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImageCollectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageCollectionPayload>
          }
          findMany: {
            args: Prisma.ImageCollectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageCollectionPayload>[]
          }
          create: {
            args: Prisma.ImageCollectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageCollectionPayload>
          }
          createMany: {
            args: Prisma.ImageCollectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ImageCollectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageCollectionPayload>
          }
          update: {
            args: Prisma.ImageCollectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageCollectionPayload>
          }
          deleteMany: {
            args: Prisma.ImageCollectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImageCollectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ImageCollectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImageCollectionPayload>
          }
          aggregate: {
            args: Prisma.ImageCollectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImageCollection>
          }
          groupBy: {
            args: Prisma.ImageCollectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImageCollectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImageCollectionCountArgs<ExtArgs>
            result: $Utils.Optional<ImageCollectionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    authenticatedUser?: AuthenticatedUserOmit
    projectTicket?: ProjectTicketOmit
    careerTicket?: CareerTicketOmit
    image?: ImageOmit
    imageCollection?: ImageCollectionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model AuthenticatedUser
   */

  export type AggregateAuthenticatedUser = {
    _count: AuthenticatedUserCountAggregateOutputType | null
    _min: AuthenticatedUserMinAggregateOutputType | null
    _max: AuthenticatedUserMaxAggregateOutputType | null
  }

  export type AuthenticatedUserMinAggregateOutputType = {
    id: string | null
    s3Key: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.Role | null
    lastLogin: Date | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AuthenticatedUserMaxAggregateOutputType = {
    id: string | null
    s3Key: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.Role | null
    lastLogin: Date | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AuthenticatedUserCountAggregateOutputType = {
    id: number
    s3Key: number
    email: number
    passwordHash: number
    role: number
    lastLogin: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AuthenticatedUserMinAggregateInputType = {
    id?: true
    s3Key?: true
    email?: true
    passwordHash?: true
    role?: true
    lastLogin?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AuthenticatedUserMaxAggregateInputType = {
    id?: true
    s3Key?: true
    email?: true
    passwordHash?: true
    role?: true
    lastLogin?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AuthenticatedUserCountAggregateInputType = {
    id?: true
    s3Key?: true
    email?: true
    passwordHash?: true
    role?: true
    lastLogin?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AuthenticatedUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuthenticatedUser to aggregate.
     */
    where?: AuthenticatedUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthenticatedUsers to fetch.
     */
    orderBy?: AuthenticatedUserOrderByWithRelationInput | AuthenticatedUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuthenticatedUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthenticatedUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthenticatedUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuthenticatedUsers
    **/
    _count?: true | AuthenticatedUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthenticatedUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthenticatedUserMaxAggregateInputType
  }

  export type GetAuthenticatedUserAggregateType<T extends AuthenticatedUserAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthenticatedUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthenticatedUser[P]>
      : GetScalarType<T[P], AggregateAuthenticatedUser[P]>
  }




  export type AuthenticatedUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthenticatedUserWhereInput
    orderBy?: AuthenticatedUserOrderByWithAggregationInput | AuthenticatedUserOrderByWithAggregationInput[]
    by: AuthenticatedUserScalarFieldEnum[] | AuthenticatedUserScalarFieldEnum
    having?: AuthenticatedUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthenticatedUserCountAggregateInputType | true
    _min?: AuthenticatedUserMinAggregateInputType
    _max?: AuthenticatedUserMaxAggregateInputType
  }

  export type AuthenticatedUserGroupByOutputType = {
    id: string
    s3Key: string
    email: string
    passwordHash: string
    role: $Enums.Role
    lastLogin: Date | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: AuthenticatedUserCountAggregateOutputType | null
    _min: AuthenticatedUserMinAggregateOutputType | null
    _max: AuthenticatedUserMaxAggregateOutputType | null
  }

  type GetAuthenticatedUserGroupByPayload<T extends AuthenticatedUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthenticatedUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthenticatedUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthenticatedUserGroupByOutputType[P]>
            : GetScalarType<T[P], AuthenticatedUserGroupByOutputType[P]>
        }
      >
    >


  export type AuthenticatedUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    s3Key?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    lastLogin?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["authenticatedUser"]>



  export type AuthenticatedUserSelectScalar = {
    id?: boolean
    s3Key?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    lastLogin?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AuthenticatedUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "s3Key" | "email" | "passwordHash" | "role" | "lastLogin" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["authenticatedUser"]>

  export type $AuthenticatedUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuthenticatedUser"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      s3Key: string
      email: string
      passwordHash: string
      role: $Enums.Role
      lastLogin: Date | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["authenticatedUser"]>
    composites: {}
  }

  type AuthenticatedUserGetPayload<S extends boolean | null | undefined | AuthenticatedUserDefaultArgs> = $Result.GetResult<Prisma.$AuthenticatedUserPayload, S>

  type AuthenticatedUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuthenticatedUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuthenticatedUserCountAggregateInputType | true
    }

  export interface AuthenticatedUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuthenticatedUser'], meta: { name: 'AuthenticatedUser' } }
    /**
     * Find zero or one AuthenticatedUser that matches the filter.
     * @param {AuthenticatedUserFindUniqueArgs} args - Arguments to find a AuthenticatedUser
     * @example
     * // Get one AuthenticatedUser
     * const authenticatedUser = await prisma.authenticatedUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuthenticatedUserFindUniqueArgs>(args: SelectSubset<T, AuthenticatedUserFindUniqueArgs<ExtArgs>>): Prisma__AuthenticatedUserClient<$Result.GetResult<Prisma.$AuthenticatedUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuthenticatedUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuthenticatedUserFindUniqueOrThrowArgs} args - Arguments to find a AuthenticatedUser
     * @example
     * // Get one AuthenticatedUser
     * const authenticatedUser = await prisma.authenticatedUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuthenticatedUserFindUniqueOrThrowArgs>(args: SelectSubset<T, AuthenticatedUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuthenticatedUserClient<$Result.GetResult<Prisma.$AuthenticatedUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuthenticatedUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticatedUserFindFirstArgs} args - Arguments to find a AuthenticatedUser
     * @example
     * // Get one AuthenticatedUser
     * const authenticatedUser = await prisma.authenticatedUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuthenticatedUserFindFirstArgs>(args?: SelectSubset<T, AuthenticatedUserFindFirstArgs<ExtArgs>>): Prisma__AuthenticatedUserClient<$Result.GetResult<Prisma.$AuthenticatedUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuthenticatedUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticatedUserFindFirstOrThrowArgs} args - Arguments to find a AuthenticatedUser
     * @example
     * // Get one AuthenticatedUser
     * const authenticatedUser = await prisma.authenticatedUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuthenticatedUserFindFirstOrThrowArgs>(args?: SelectSubset<T, AuthenticatedUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuthenticatedUserClient<$Result.GetResult<Prisma.$AuthenticatedUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuthenticatedUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticatedUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuthenticatedUsers
     * const authenticatedUsers = await prisma.authenticatedUser.findMany()
     * 
     * // Get first 10 AuthenticatedUsers
     * const authenticatedUsers = await prisma.authenticatedUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authenticatedUserWithIdOnly = await prisma.authenticatedUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuthenticatedUserFindManyArgs>(args?: SelectSubset<T, AuthenticatedUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthenticatedUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuthenticatedUser.
     * @param {AuthenticatedUserCreateArgs} args - Arguments to create a AuthenticatedUser.
     * @example
     * // Create one AuthenticatedUser
     * const AuthenticatedUser = await prisma.authenticatedUser.create({
     *   data: {
     *     // ... data to create a AuthenticatedUser
     *   }
     * })
     * 
     */
    create<T extends AuthenticatedUserCreateArgs>(args: SelectSubset<T, AuthenticatedUserCreateArgs<ExtArgs>>): Prisma__AuthenticatedUserClient<$Result.GetResult<Prisma.$AuthenticatedUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuthenticatedUsers.
     * @param {AuthenticatedUserCreateManyArgs} args - Arguments to create many AuthenticatedUsers.
     * @example
     * // Create many AuthenticatedUsers
     * const authenticatedUser = await prisma.authenticatedUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuthenticatedUserCreateManyArgs>(args?: SelectSubset<T, AuthenticatedUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AuthenticatedUser.
     * @param {AuthenticatedUserDeleteArgs} args - Arguments to delete one AuthenticatedUser.
     * @example
     * // Delete one AuthenticatedUser
     * const AuthenticatedUser = await prisma.authenticatedUser.delete({
     *   where: {
     *     // ... filter to delete one AuthenticatedUser
     *   }
     * })
     * 
     */
    delete<T extends AuthenticatedUserDeleteArgs>(args: SelectSubset<T, AuthenticatedUserDeleteArgs<ExtArgs>>): Prisma__AuthenticatedUserClient<$Result.GetResult<Prisma.$AuthenticatedUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuthenticatedUser.
     * @param {AuthenticatedUserUpdateArgs} args - Arguments to update one AuthenticatedUser.
     * @example
     * // Update one AuthenticatedUser
     * const authenticatedUser = await prisma.authenticatedUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuthenticatedUserUpdateArgs>(args: SelectSubset<T, AuthenticatedUserUpdateArgs<ExtArgs>>): Prisma__AuthenticatedUserClient<$Result.GetResult<Prisma.$AuthenticatedUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuthenticatedUsers.
     * @param {AuthenticatedUserDeleteManyArgs} args - Arguments to filter AuthenticatedUsers to delete.
     * @example
     * // Delete a few AuthenticatedUsers
     * const { count } = await prisma.authenticatedUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuthenticatedUserDeleteManyArgs>(args?: SelectSubset<T, AuthenticatedUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuthenticatedUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticatedUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuthenticatedUsers
     * const authenticatedUser = await prisma.authenticatedUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuthenticatedUserUpdateManyArgs>(args: SelectSubset<T, AuthenticatedUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AuthenticatedUser.
     * @param {AuthenticatedUserUpsertArgs} args - Arguments to update or create a AuthenticatedUser.
     * @example
     * // Update or create a AuthenticatedUser
     * const authenticatedUser = await prisma.authenticatedUser.upsert({
     *   create: {
     *     // ... data to create a AuthenticatedUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuthenticatedUser we want to update
     *   }
     * })
     */
    upsert<T extends AuthenticatedUserUpsertArgs>(args: SelectSubset<T, AuthenticatedUserUpsertArgs<ExtArgs>>): Prisma__AuthenticatedUserClient<$Result.GetResult<Prisma.$AuthenticatedUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuthenticatedUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticatedUserCountArgs} args - Arguments to filter AuthenticatedUsers to count.
     * @example
     * // Count the number of AuthenticatedUsers
     * const count = await prisma.authenticatedUser.count({
     *   where: {
     *     // ... the filter for the AuthenticatedUsers we want to count
     *   }
     * })
    **/
    count<T extends AuthenticatedUserCountArgs>(
      args?: Subset<T, AuthenticatedUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthenticatedUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuthenticatedUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticatedUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuthenticatedUserAggregateArgs>(args: Subset<T, AuthenticatedUserAggregateArgs>): Prisma.PrismaPromise<GetAuthenticatedUserAggregateType<T>>

    /**
     * Group by AuthenticatedUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthenticatedUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuthenticatedUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthenticatedUserGroupByArgs['orderBy'] }
        : { orderBy?: AuthenticatedUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuthenticatedUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthenticatedUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuthenticatedUser model
   */
  readonly fields: AuthenticatedUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuthenticatedUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuthenticatedUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuthenticatedUser model
   */
  interface AuthenticatedUserFieldRefs {
    readonly id: FieldRef<"AuthenticatedUser", 'String'>
    readonly s3Key: FieldRef<"AuthenticatedUser", 'String'>
    readonly email: FieldRef<"AuthenticatedUser", 'String'>
    readonly passwordHash: FieldRef<"AuthenticatedUser", 'String'>
    readonly role: FieldRef<"AuthenticatedUser", 'Role'>
    readonly lastLogin: FieldRef<"AuthenticatedUser", 'DateTime'>
    readonly isActive: FieldRef<"AuthenticatedUser", 'Boolean'>
    readonly createdAt: FieldRef<"AuthenticatedUser", 'DateTime'>
    readonly updatedAt: FieldRef<"AuthenticatedUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuthenticatedUser findUnique
   */
  export type AuthenticatedUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthenticatedUser
     */
    select?: AuthenticatedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthenticatedUser
     */
    omit?: AuthenticatedUserOmit<ExtArgs> | null
    /**
     * Filter, which AuthenticatedUser to fetch.
     */
    where: AuthenticatedUserWhereUniqueInput
  }

  /**
   * AuthenticatedUser findUniqueOrThrow
   */
  export type AuthenticatedUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthenticatedUser
     */
    select?: AuthenticatedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthenticatedUser
     */
    omit?: AuthenticatedUserOmit<ExtArgs> | null
    /**
     * Filter, which AuthenticatedUser to fetch.
     */
    where: AuthenticatedUserWhereUniqueInput
  }

  /**
   * AuthenticatedUser findFirst
   */
  export type AuthenticatedUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthenticatedUser
     */
    select?: AuthenticatedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthenticatedUser
     */
    omit?: AuthenticatedUserOmit<ExtArgs> | null
    /**
     * Filter, which AuthenticatedUser to fetch.
     */
    where?: AuthenticatedUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthenticatedUsers to fetch.
     */
    orderBy?: AuthenticatedUserOrderByWithRelationInput | AuthenticatedUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuthenticatedUsers.
     */
    cursor?: AuthenticatedUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthenticatedUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthenticatedUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthenticatedUsers.
     */
    distinct?: AuthenticatedUserScalarFieldEnum | AuthenticatedUserScalarFieldEnum[]
  }

  /**
   * AuthenticatedUser findFirstOrThrow
   */
  export type AuthenticatedUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthenticatedUser
     */
    select?: AuthenticatedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthenticatedUser
     */
    omit?: AuthenticatedUserOmit<ExtArgs> | null
    /**
     * Filter, which AuthenticatedUser to fetch.
     */
    where?: AuthenticatedUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthenticatedUsers to fetch.
     */
    orderBy?: AuthenticatedUserOrderByWithRelationInput | AuthenticatedUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuthenticatedUsers.
     */
    cursor?: AuthenticatedUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthenticatedUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthenticatedUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthenticatedUsers.
     */
    distinct?: AuthenticatedUserScalarFieldEnum | AuthenticatedUserScalarFieldEnum[]
  }

  /**
   * AuthenticatedUser findMany
   */
  export type AuthenticatedUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthenticatedUser
     */
    select?: AuthenticatedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthenticatedUser
     */
    omit?: AuthenticatedUserOmit<ExtArgs> | null
    /**
     * Filter, which AuthenticatedUsers to fetch.
     */
    where?: AuthenticatedUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthenticatedUsers to fetch.
     */
    orderBy?: AuthenticatedUserOrderByWithRelationInput | AuthenticatedUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuthenticatedUsers.
     */
    cursor?: AuthenticatedUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthenticatedUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthenticatedUsers.
     */
    skip?: number
    distinct?: AuthenticatedUserScalarFieldEnum | AuthenticatedUserScalarFieldEnum[]
  }

  /**
   * AuthenticatedUser create
   */
  export type AuthenticatedUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthenticatedUser
     */
    select?: AuthenticatedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthenticatedUser
     */
    omit?: AuthenticatedUserOmit<ExtArgs> | null
    /**
     * The data needed to create a AuthenticatedUser.
     */
    data: XOR<AuthenticatedUserCreateInput, AuthenticatedUserUncheckedCreateInput>
  }

  /**
   * AuthenticatedUser createMany
   */
  export type AuthenticatedUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuthenticatedUsers.
     */
    data: AuthenticatedUserCreateManyInput | AuthenticatedUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuthenticatedUser update
   */
  export type AuthenticatedUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthenticatedUser
     */
    select?: AuthenticatedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthenticatedUser
     */
    omit?: AuthenticatedUserOmit<ExtArgs> | null
    /**
     * The data needed to update a AuthenticatedUser.
     */
    data: XOR<AuthenticatedUserUpdateInput, AuthenticatedUserUncheckedUpdateInput>
    /**
     * Choose, which AuthenticatedUser to update.
     */
    where: AuthenticatedUserWhereUniqueInput
  }

  /**
   * AuthenticatedUser updateMany
   */
  export type AuthenticatedUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuthenticatedUsers.
     */
    data: XOR<AuthenticatedUserUpdateManyMutationInput, AuthenticatedUserUncheckedUpdateManyInput>
    /**
     * Filter which AuthenticatedUsers to update
     */
    where?: AuthenticatedUserWhereInput
    /**
     * Limit how many AuthenticatedUsers to update.
     */
    limit?: number
  }

  /**
   * AuthenticatedUser upsert
   */
  export type AuthenticatedUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthenticatedUser
     */
    select?: AuthenticatedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthenticatedUser
     */
    omit?: AuthenticatedUserOmit<ExtArgs> | null
    /**
     * The filter to search for the AuthenticatedUser to update in case it exists.
     */
    where: AuthenticatedUserWhereUniqueInput
    /**
     * In case the AuthenticatedUser found by the `where` argument doesn't exist, create a new AuthenticatedUser with this data.
     */
    create: XOR<AuthenticatedUserCreateInput, AuthenticatedUserUncheckedCreateInput>
    /**
     * In case the AuthenticatedUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuthenticatedUserUpdateInput, AuthenticatedUserUncheckedUpdateInput>
  }

  /**
   * AuthenticatedUser delete
   */
  export type AuthenticatedUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthenticatedUser
     */
    select?: AuthenticatedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthenticatedUser
     */
    omit?: AuthenticatedUserOmit<ExtArgs> | null
    /**
     * Filter which AuthenticatedUser to delete.
     */
    where: AuthenticatedUserWhereUniqueInput
  }

  /**
   * AuthenticatedUser deleteMany
   */
  export type AuthenticatedUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuthenticatedUsers to delete
     */
    where?: AuthenticatedUserWhereInput
    /**
     * Limit how many AuthenticatedUsers to delete.
     */
    limit?: number
  }

  /**
   * AuthenticatedUser without action
   */
  export type AuthenticatedUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthenticatedUser
     */
    select?: AuthenticatedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthenticatedUser
     */
    omit?: AuthenticatedUserOmit<ExtArgs> | null
  }


  /**
   * Model ProjectTicket
   */

  export type AggregateProjectTicket = {
    _count: ProjectTicketCountAggregateOutputType | null
    _min: ProjectTicketMinAggregateOutputType | null
    _max: ProjectTicketMaxAggregateOutputType | null
  }

  export type ProjectTicketMinAggregateOutputType = {
    id: string | null
    s3Key: string | null
    name: string | null
    email: string | null
    phone: string | null
    zipCode: string | null
    projectType: $Enums.ProjectType | null
    projectStart: $Enums.ProjectStart | null
    projectStatus: $Enums.ProjectStatus | null
    message: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectTicketMaxAggregateOutputType = {
    id: string | null
    s3Key: string | null
    name: string | null
    email: string | null
    phone: string | null
    zipCode: string | null
    projectType: $Enums.ProjectType | null
    projectStart: $Enums.ProjectStart | null
    projectStatus: $Enums.ProjectStatus | null
    message: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectTicketCountAggregateOutputType = {
    id: number
    s3Key: number
    name: number
    email: number
    phone: number
    zipCode: number
    projectType: number
    projectStart: number
    projectStatus: number
    message: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectTicketMinAggregateInputType = {
    id?: true
    s3Key?: true
    name?: true
    email?: true
    phone?: true
    zipCode?: true
    projectType?: true
    projectStart?: true
    projectStatus?: true
    message?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectTicketMaxAggregateInputType = {
    id?: true
    s3Key?: true
    name?: true
    email?: true
    phone?: true
    zipCode?: true
    projectType?: true
    projectStart?: true
    projectStatus?: true
    message?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectTicketCountAggregateInputType = {
    id?: true
    s3Key?: true
    name?: true
    email?: true
    phone?: true
    zipCode?: true
    projectType?: true
    projectStart?: true
    projectStatus?: true
    message?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectTicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectTicket to aggregate.
     */
    where?: ProjectTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectTickets to fetch.
     */
    orderBy?: ProjectTicketOrderByWithRelationInput | ProjectTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectTickets
    **/
    _count?: true | ProjectTicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectTicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectTicketMaxAggregateInputType
  }

  export type GetProjectTicketAggregateType<T extends ProjectTicketAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectTicket[P]>
      : GetScalarType<T[P], AggregateProjectTicket[P]>
  }




  export type ProjectTicketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectTicketWhereInput
    orderBy?: ProjectTicketOrderByWithAggregationInput | ProjectTicketOrderByWithAggregationInput[]
    by: ProjectTicketScalarFieldEnum[] | ProjectTicketScalarFieldEnum
    having?: ProjectTicketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectTicketCountAggregateInputType | true
    _min?: ProjectTicketMinAggregateInputType
    _max?: ProjectTicketMaxAggregateInputType
  }

  export type ProjectTicketGroupByOutputType = {
    id: string
    s3Key: string
    name: string
    email: string
    phone: string
    zipCode: string
    projectType: $Enums.ProjectType
    projectStart: $Enums.ProjectStart
    projectStatus: $Enums.ProjectStatus
    message: string
    createdAt: Date
    updatedAt: Date
    _count: ProjectTicketCountAggregateOutputType | null
    _min: ProjectTicketMinAggregateOutputType | null
    _max: ProjectTicketMaxAggregateOutputType | null
  }

  type GetProjectTicketGroupByPayload<T extends ProjectTicketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectTicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectTicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectTicketGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectTicketGroupByOutputType[P]>
        }
      >
    >


  export type ProjectTicketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    s3Key?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    zipCode?: boolean
    projectType?: boolean
    projectStart?: boolean
    projectStatus?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["projectTicket"]>



  export type ProjectTicketSelectScalar = {
    id?: boolean
    s3Key?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    zipCode?: boolean
    projectType?: boolean
    projectStart?: boolean
    projectStatus?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectTicketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "s3Key" | "name" | "email" | "phone" | "zipCode" | "projectType" | "projectStart" | "projectStatus" | "message" | "createdAt" | "updatedAt", ExtArgs["result"]["projectTicket"]>

  export type $ProjectTicketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectTicket"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      s3Key: string
      name: string
      email: string
      phone: string
      zipCode: string
      projectType: $Enums.ProjectType
      projectStart: $Enums.ProjectStart
      projectStatus: $Enums.ProjectStatus
      message: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["projectTicket"]>
    composites: {}
  }

  type ProjectTicketGetPayload<S extends boolean | null | undefined | ProjectTicketDefaultArgs> = $Result.GetResult<Prisma.$ProjectTicketPayload, S>

  type ProjectTicketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectTicketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectTicketCountAggregateInputType | true
    }

  export interface ProjectTicketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectTicket'], meta: { name: 'ProjectTicket' } }
    /**
     * Find zero or one ProjectTicket that matches the filter.
     * @param {ProjectTicketFindUniqueArgs} args - Arguments to find a ProjectTicket
     * @example
     * // Get one ProjectTicket
     * const projectTicket = await prisma.projectTicket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectTicketFindUniqueArgs>(args: SelectSubset<T, ProjectTicketFindUniqueArgs<ExtArgs>>): Prisma__ProjectTicketClient<$Result.GetResult<Prisma.$ProjectTicketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectTicket that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectTicketFindUniqueOrThrowArgs} args - Arguments to find a ProjectTicket
     * @example
     * // Get one ProjectTicket
     * const projectTicket = await prisma.projectTicket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectTicketFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectTicketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectTicketClient<$Result.GetResult<Prisma.$ProjectTicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectTicket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTicketFindFirstArgs} args - Arguments to find a ProjectTicket
     * @example
     * // Get one ProjectTicket
     * const projectTicket = await prisma.projectTicket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectTicketFindFirstArgs>(args?: SelectSubset<T, ProjectTicketFindFirstArgs<ExtArgs>>): Prisma__ProjectTicketClient<$Result.GetResult<Prisma.$ProjectTicketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectTicket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTicketFindFirstOrThrowArgs} args - Arguments to find a ProjectTicket
     * @example
     * // Get one ProjectTicket
     * const projectTicket = await prisma.projectTicket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectTicketFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectTicketFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectTicketClient<$Result.GetResult<Prisma.$ProjectTicketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectTickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTicketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectTickets
     * const projectTickets = await prisma.projectTicket.findMany()
     * 
     * // Get first 10 ProjectTickets
     * const projectTickets = await prisma.projectTicket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectTicketWithIdOnly = await prisma.projectTicket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectTicketFindManyArgs>(args?: SelectSubset<T, ProjectTicketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectTicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectTicket.
     * @param {ProjectTicketCreateArgs} args - Arguments to create a ProjectTicket.
     * @example
     * // Create one ProjectTicket
     * const ProjectTicket = await prisma.projectTicket.create({
     *   data: {
     *     // ... data to create a ProjectTicket
     *   }
     * })
     * 
     */
    create<T extends ProjectTicketCreateArgs>(args: SelectSubset<T, ProjectTicketCreateArgs<ExtArgs>>): Prisma__ProjectTicketClient<$Result.GetResult<Prisma.$ProjectTicketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectTickets.
     * @param {ProjectTicketCreateManyArgs} args - Arguments to create many ProjectTickets.
     * @example
     * // Create many ProjectTickets
     * const projectTicket = await prisma.projectTicket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectTicketCreateManyArgs>(args?: SelectSubset<T, ProjectTicketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProjectTicket.
     * @param {ProjectTicketDeleteArgs} args - Arguments to delete one ProjectTicket.
     * @example
     * // Delete one ProjectTicket
     * const ProjectTicket = await prisma.projectTicket.delete({
     *   where: {
     *     // ... filter to delete one ProjectTicket
     *   }
     * })
     * 
     */
    delete<T extends ProjectTicketDeleteArgs>(args: SelectSubset<T, ProjectTicketDeleteArgs<ExtArgs>>): Prisma__ProjectTicketClient<$Result.GetResult<Prisma.$ProjectTicketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectTicket.
     * @param {ProjectTicketUpdateArgs} args - Arguments to update one ProjectTicket.
     * @example
     * // Update one ProjectTicket
     * const projectTicket = await prisma.projectTicket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectTicketUpdateArgs>(args: SelectSubset<T, ProjectTicketUpdateArgs<ExtArgs>>): Prisma__ProjectTicketClient<$Result.GetResult<Prisma.$ProjectTicketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectTickets.
     * @param {ProjectTicketDeleteManyArgs} args - Arguments to filter ProjectTickets to delete.
     * @example
     * // Delete a few ProjectTickets
     * const { count } = await prisma.projectTicket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectTicketDeleteManyArgs>(args?: SelectSubset<T, ProjectTicketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectTickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTicketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectTickets
     * const projectTicket = await prisma.projectTicket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectTicketUpdateManyArgs>(args: SelectSubset<T, ProjectTicketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProjectTicket.
     * @param {ProjectTicketUpsertArgs} args - Arguments to update or create a ProjectTicket.
     * @example
     * // Update or create a ProjectTicket
     * const projectTicket = await prisma.projectTicket.upsert({
     *   create: {
     *     // ... data to create a ProjectTicket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectTicket we want to update
     *   }
     * })
     */
    upsert<T extends ProjectTicketUpsertArgs>(args: SelectSubset<T, ProjectTicketUpsertArgs<ExtArgs>>): Prisma__ProjectTicketClient<$Result.GetResult<Prisma.$ProjectTicketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectTickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTicketCountArgs} args - Arguments to filter ProjectTickets to count.
     * @example
     * // Count the number of ProjectTickets
     * const count = await prisma.projectTicket.count({
     *   where: {
     *     // ... the filter for the ProjectTickets we want to count
     *   }
     * })
    **/
    count<T extends ProjectTicketCountArgs>(
      args?: Subset<T, ProjectTicketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectTicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectTicket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectTicketAggregateArgs>(args: Subset<T, ProjectTicketAggregateArgs>): Prisma.PrismaPromise<GetProjectTicketAggregateType<T>>

    /**
     * Group by ProjectTicket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTicketGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectTicketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectTicketGroupByArgs['orderBy'] }
        : { orderBy?: ProjectTicketGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectTicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectTicket model
   */
  readonly fields: ProjectTicketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectTicket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectTicketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProjectTicket model
   */
  interface ProjectTicketFieldRefs {
    readonly id: FieldRef<"ProjectTicket", 'String'>
    readonly s3Key: FieldRef<"ProjectTicket", 'String'>
    readonly name: FieldRef<"ProjectTicket", 'String'>
    readonly email: FieldRef<"ProjectTicket", 'String'>
    readonly phone: FieldRef<"ProjectTicket", 'String'>
    readonly zipCode: FieldRef<"ProjectTicket", 'String'>
    readonly projectType: FieldRef<"ProjectTicket", 'ProjectType'>
    readonly projectStart: FieldRef<"ProjectTicket", 'ProjectStart'>
    readonly projectStatus: FieldRef<"ProjectTicket", 'ProjectStatus'>
    readonly message: FieldRef<"ProjectTicket", 'String'>
    readonly createdAt: FieldRef<"ProjectTicket", 'DateTime'>
    readonly updatedAt: FieldRef<"ProjectTicket", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProjectTicket findUnique
   */
  export type ProjectTicketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTicket
     */
    select?: ProjectTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTicket
     */
    omit?: ProjectTicketOmit<ExtArgs> | null
    /**
     * Filter, which ProjectTicket to fetch.
     */
    where: ProjectTicketWhereUniqueInput
  }

  /**
   * ProjectTicket findUniqueOrThrow
   */
  export type ProjectTicketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTicket
     */
    select?: ProjectTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTicket
     */
    omit?: ProjectTicketOmit<ExtArgs> | null
    /**
     * Filter, which ProjectTicket to fetch.
     */
    where: ProjectTicketWhereUniqueInput
  }

  /**
   * ProjectTicket findFirst
   */
  export type ProjectTicketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTicket
     */
    select?: ProjectTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTicket
     */
    omit?: ProjectTicketOmit<ExtArgs> | null
    /**
     * Filter, which ProjectTicket to fetch.
     */
    where?: ProjectTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectTickets to fetch.
     */
    orderBy?: ProjectTicketOrderByWithRelationInput | ProjectTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectTickets.
     */
    cursor?: ProjectTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectTickets.
     */
    distinct?: ProjectTicketScalarFieldEnum | ProjectTicketScalarFieldEnum[]
  }

  /**
   * ProjectTicket findFirstOrThrow
   */
  export type ProjectTicketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTicket
     */
    select?: ProjectTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTicket
     */
    omit?: ProjectTicketOmit<ExtArgs> | null
    /**
     * Filter, which ProjectTicket to fetch.
     */
    where?: ProjectTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectTickets to fetch.
     */
    orderBy?: ProjectTicketOrderByWithRelationInput | ProjectTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectTickets.
     */
    cursor?: ProjectTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectTickets.
     */
    distinct?: ProjectTicketScalarFieldEnum | ProjectTicketScalarFieldEnum[]
  }

  /**
   * ProjectTicket findMany
   */
  export type ProjectTicketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTicket
     */
    select?: ProjectTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTicket
     */
    omit?: ProjectTicketOmit<ExtArgs> | null
    /**
     * Filter, which ProjectTickets to fetch.
     */
    where?: ProjectTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectTickets to fetch.
     */
    orderBy?: ProjectTicketOrderByWithRelationInput | ProjectTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectTickets.
     */
    cursor?: ProjectTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectTickets.
     */
    skip?: number
    distinct?: ProjectTicketScalarFieldEnum | ProjectTicketScalarFieldEnum[]
  }

  /**
   * ProjectTicket create
   */
  export type ProjectTicketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTicket
     */
    select?: ProjectTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTicket
     */
    omit?: ProjectTicketOmit<ExtArgs> | null
    /**
     * The data needed to create a ProjectTicket.
     */
    data: XOR<ProjectTicketCreateInput, ProjectTicketUncheckedCreateInput>
  }

  /**
   * ProjectTicket createMany
   */
  export type ProjectTicketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectTickets.
     */
    data: ProjectTicketCreateManyInput | ProjectTicketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectTicket update
   */
  export type ProjectTicketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTicket
     */
    select?: ProjectTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTicket
     */
    omit?: ProjectTicketOmit<ExtArgs> | null
    /**
     * The data needed to update a ProjectTicket.
     */
    data: XOR<ProjectTicketUpdateInput, ProjectTicketUncheckedUpdateInput>
    /**
     * Choose, which ProjectTicket to update.
     */
    where: ProjectTicketWhereUniqueInput
  }

  /**
   * ProjectTicket updateMany
   */
  export type ProjectTicketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectTickets.
     */
    data: XOR<ProjectTicketUpdateManyMutationInput, ProjectTicketUncheckedUpdateManyInput>
    /**
     * Filter which ProjectTickets to update
     */
    where?: ProjectTicketWhereInput
    /**
     * Limit how many ProjectTickets to update.
     */
    limit?: number
  }

  /**
   * ProjectTicket upsert
   */
  export type ProjectTicketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTicket
     */
    select?: ProjectTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTicket
     */
    omit?: ProjectTicketOmit<ExtArgs> | null
    /**
     * The filter to search for the ProjectTicket to update in case it exists.
     */
    where: ProjectTicketWhereUniqueInput
    /**
     * In case the ProjectTicket found by the `where` argument doesn't exist, create a new ProjectTicket with this data.
     */
    create: XOR<ProjectTicketCreateInput, ProjectTicketUncheckedCreateInput>
    /**
     * In case the ProjectTicket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectTicketUpdateInput, ProjectTicketUncheckedUpdateInput>
  }

  /**
   * ProjectTicket delete
   */
  export type ProjectTicketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTicket
     */
    select?: ProjectTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTicket
     */
    omit?: ProjectTicketOmit<ExtArgs> | null
    /**
     * Filter which ProjectTicket to delete.
     */
    where: ProjectTicketWhereUniqueInput
  }

  /**
   * ProjectTicket deleteMany
   */
  export type ProjectTicketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectTickets to delete
     */
    where?: ProjectTicketWhereInput
    /**
     * Limit how many ProjectTickets to delete.
     */
    limit?: number
  }

  /**
   * ProjectTicket without action
   */
  export type ProjectTicketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTicket
     */
    select?: ProjectTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectTicket
     */
    omit?: ProjectTicketOmit<ExtArgs> | null
  }


  /**
   * Model CareerTicket
   */

  export type AggregateCareerTicket = {
    _count: CareerTicketCountAggregateOutputType | null
    _avg: CareerTicketAvgAggregateOutputType | null
    _sum: CareerTicketSumAggregateOutputType | null
    _min: CareerTicketMinAggregateOutputType | null
    _max: CareerTicketMaxAggregateOutputType | null
  }

  export type CareerTicketAvgAggregateOutputType = {
    resumeSize: number | null
  }

  export type CareerTicketSumAggregateOutputType = {
    resumeSize: number | null
  }

  export type CareerTicketMinAggregateOutputType = {
    id: string | null
    s3Key: string | null
    name: string | null
    email: string | null
    phone: string | null
    resumeUrl: string | null
    resumeName: string | null
    resumeSize: number | null
    resumeType: $Enums.FileType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CareerTicketMaxAggregateOutputType = {
    id: string | null
    s3Key: string | null
    name: string | null
    email: string | null
    phone: string | null
    resumeUrl: string | null
    resumeName: string | null
    resumeSize: number | null
    resumeType: $Enums.FileType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CareerTicketCountAggregateOutputType = {
    id: number
    s3Key: number
    name: number
    email: number
    phone: number
    resumeUrl: number
    resumeName: number
    resumeSize: number
    resumeType: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CareerTicketAvgAggregateInputType = {
    resumeSize?: true
  }

  export type CareerTicketSumAggregateInputType = {
    resumeSize?: true
  }

  export type CareerTicketMinAggregateInputType = {
    id?: true
    s3Key?: true
    name?: true
    email?: true
    phone?: true
    resumeUrl?: true
    resumeName?: true
    resumeSize?: true
    resumeType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CareerTicketMaxAggregateInputType = {
    id?: true
    s3Key?: true
    name?: true
    email?: true
    phone?: true
    resumeUrl?: true
    resumeName?: true
    resumeSize?: true
    resumeType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CareerTicketCountAggregateInputType = {
    id?: true
    s3Key?: true
    name?: true
    email?: true
    phone?: true
    resumeUrl?: true
    resumeName?: true
    resumeSize?: true
    resumeType?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CareerTicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CareerTicket to aggregate.
     */
    where?: CareerTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CareerTickets to fetch.
     */
    orderBy?: CareerTicketOrderByWithRelationInput | CareerTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CareerTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CareerTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CareerTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CareerTickets
    **/
    _count?: true | CareerTicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CareerTicketAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CareerTicketSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CareerTicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CareerTicketMaxAggregateInputType
  }

  export type GetCareerTicketAggregateType<T extends CareerTicketAggregateArgs> = {
        [P in keyof T & keyof AggregateCareerTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCareerTicket[P]>
      : GetScalarType<T[P], AggregateCareerTicket[P]>
  }




  export type CareerTicketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CareerTicketWhereInput
    orderBy?: CareerTicketOrderByWithAggregationInput | CareerTicketOrderByWithAggregationInput[]
    by: CareerTicketScalarFieldEnum[] | CareerTicketScalarFieldEnum
    having?: CareerTicketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CareerTicketCountAggregateInputType | true
    _avg?: CareerTicketAvgAggregateInputType
    _sum?: CareerTicketSumAggregateInputType
    _min?: CareerTicketMinAggregateInputType
    _max?: CareerTicketMaxAggregateInputType
  }

  export type CareerTicketGroupByOutputType = {
    id: string
    s3Key: string
    name: string
    email: string
    phone: string
    resumeUrl: string
    resumeName: string
    resumeSize: number
    resumeType: $Enums.FileType
    createdAt: Date
    updatedAt: Date
    _count: CareerTicketCountAggregateOutputType | null
    _avg: CareerTicketAvgAggregateOutputType | null
    _sum: CareerTicketSumAggregateOutputType | null
    _min: CareerTicketMinAggregateOutputType | null
    _max: CareerTicketMaxAggregateOutputType | null
  }

  type GetCareerTicketGroupByPayload<T extends CareerTicketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CareerTicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CareerTicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CareerTicketGroupByOutputType[P]>
            : GetScalarType<T[P], CareerTicketGroupByOutputType[P]>
        }
      >
    >


  export type CareerTicketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    s3Key?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    resumeUrl?: boolean
    resumeName?: boolean
    resumeSize?: boolean
    resumeType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["careerTicket"]>



  export type CareerTicketSelectScalar = {
    id?: boolean
    s3Key?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    resumeUrl?: boolean
    resumeName?: boolean
    resumeSize?: boolean
    resumeType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CareerTicketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "s3Key" | "name" | "email" | "phone" | "resumeUrl" | "resumeName" | "resumeSize" | "resumeType" | "createdAt" | "updatedAt", ExtArgs["result"]["careerTicket"]>

  export type $CareerTicketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CareerTicket"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      s3Key: string
      name: string
      email: string
      phone: string
      resumeUrl: string
      resumeName: string
      resumeSize: number
      resumeType: $Enums.FileType
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["careerTicket"]>
    composites: {}
  }

  type CareerTicketGetPayload<S extends boolean | null | undefined | CareerTicketDefaultArgs> = $Result.GetResult<Prisma.$CareerTicketPayload, S>

  type CareerTicketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CareerTicketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CareerTicketCountAggregateInputType | true
    }

  export interface CareerTicketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CareerTicket'], meta: { name: 'CareerTicket' } }
    /**
     * Find zero or one CareerTicket that matches the filter.
     * @param {CareerTicketFindUniqueArgs} args - Arguments to find a CareerTicket
     * @example
     * // Get one CareerTicket
     * const careerTicket = await prisma.careerTicket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CareerTicketFindUniqueArgs>(args: SelectSubset<T, CareerTicketFindUniqueArgs<ExtArgs>>): Prisma__CareerTicketClient<$Result.GetResult<Prisma.$CareerTicketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CareerTicket that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CareerTicketFindUniqueOrThrowArgs} args - Arguments to find a CareerTicket
     * @example
     * // Get one CareerTicket
     * const careerTicket = await prisma.careerTicket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CareerTicketFindUniqueOrThrowArgs>(args: SelectSubset<T, CareerTicketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CareerTicketClient<$Result.GetResult<Prisma.$CareerTicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CareerTicket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerTicketFindFirstArgs} args - Arguments to find a CareerTicket
     * @example
     * // Get one CareerTicket
     * const careerTicket = await prisma.careerTicket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CareerTicketFindFirstArgs>(args?: SelectSubset<T, CareerTicketFindFirstArgs<ExtArgs>>): Prisma__CareerTicketClient<$Result.GetResult<Prisma.$CareerTicketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CareerTicket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerTicketFindFirstOrThrowArgs} args - Arguments to find a CareerTicket
     * @example
     * // Get one CareerTicket
     * const careerTicket = await prisma.careerTicket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CareerTicketFindFirstOrThrowArgs>(args?: SelectSubset<T, CareerTicketFindFirstOrThrowArgs<ExtArgs>>): Prisma__CareerTicketClient<$Result.GetResult<Prisma.$CareerTicketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CareerTickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerTicketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CareerTickets
     * const careerTickets = await prisma.careerTicket.findMany()
     * 
     * // Get first 10 CareerTickets
     * const careerTickets = await prisma.careerTicket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const careerTicketWithIdOnly = await prisma.careerTicket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CareerTicketFindManyArgs>(args?: SelectSubset<T, CareerTicketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CareerTicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CareerTicket.
     * @param {CareerTicketCreateArgs} args - Arguments to create a CareerTicket.
     * @example
     * // Create one CareerTicket
     * const CareerTicket = await prisma.careerTicket.create({
     *   data: {
     *     // ... data to create a CareerTicket
     *   }
     * })
     * 
     */
    create<T extends CareerTicketCreateArgs>(args: SelectSubset<T, CareerTicketCreateArgs<ExtArgs>>): Prisma__CareerTicketClient<$Result.GetResult<Prisma.$CareerTicketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CareerTickets.
     * @param {CareerTicketCreateManyArgs} args - Arguments to create many CareerTickets.
     * @example
     * // Create many CareerTickets
     * const careerTicket = await prisma.careerTicket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CareerTicketCreateManyArgs>(args?: SelectSubset<T, CareerTicketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CareerTicket.
     * @param {CareerTicketDeleteArgs} args - Arguments to delete one CareerTicket.
     * @example
     * // Delete one CareerTicket
     * const CareerTicket = await prisma.careerTicket.delete({
     *   where: {
     *     // ... filter to delete one CareerTicket
     *   }
     * })
     * 
     */
    delete<T extends CareerTicketDeleteArgs>(args: SelectSubset<T, CareerTicketDeleteArgs<ExtArgs>>): Prisma__CareerTicketClient<$Result.GetResult<Prisma.$CareerTicketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CareerTicket.
     * @param {CareerTicketUpdateArgs} args - Arguments to update one CareerTicket.
     * @example
     * // Update one CareerTicket
     * const careerTicket = await prisma.careerTicket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CareerTicketUpdateArgs>(args: SelectSubset<T, CareerTicketUpdateArgs<ExtArgs>>): Prisma__CareerTicketClient<$Result.GetResult<Prisma.$CareerTicketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CareerTickets.
     * @param {CareerTicketDeleteManyArgs} args - Arguments to filter CareerTickets to delete.
     * @example
     * // Delete a few CareerTickets
     * const { count } = await prisma.careerTicket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CareerTicketDeleteManyArgs>(args?: SelectSubset<T, CareerTicketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CareerTickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerTicketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CareerTickets
     * const careerTicket = await prisma.careerTicket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CareerTicketUpdateManyArgs>(args: SelectSubset<T, CareerTicketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CareerTicket.
     * @param {CareerTicketUpsertArgs} args - Arguments to update or create a CareerTicket.
     * @example
     * // Update or create a CareerTicket
     * const careerTicket = await prisma.careerTicket.upsert({
     *   create: {
     *     // ... data to create a CareerTicket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CareerTicket we want to update
     *   }
     * })
     */
    upsert<T extends CareerTicketUpsertArgs>(args: SelectSubset<T, CareerTicketUpsertArgs<ExtArgs>>): Prisma__CareerTicketClient<$Result.GetResult<Prisma.$CareerTicketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CareerTickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerTicketCountArgs} args - Arguments to filter CareerTickets to count.
     * @example
     * // Count the number of CareerTickets
     * const count = await prisma.careerTicket.count({
     *   where: {
     *     // ... the filter for the CareerTickets we want to count
     *   }
     * })
    **/
    count<T extends CareerTicketCountArgs>(
      args?: Subset<T, CareerTicketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CareerTicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CareerTicket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerTicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CareerTicketAggregateArgs>(args: Subset<T, CareerTicketAggregateArgs>): Prisma.PrismaPromise<GetCareerTicketAggregateType<T>>

    /**
     * Group by CareerTicket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerTicketGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CareerTicketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CareerTicketGroupByArgs['orderBy'] }
        : { orderBy?: CareerTicketGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CareerTicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCareerTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CareerTicket model
   */
  readonly fields: CareerTicketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CareerTicket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CareerTicketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CareerTicket model
   */
  interface CareerTicketFieldRefs {
    readonly id: FieldRef<"CareerTicket", 'String'>
    readonly s3Key: FieldRef<"CareerTicket", 'String'>
    readonly name: FieldRef<"CareerTicket", 'String'>
    readonly email: FieldRef<"CareerTicket", 'String'>
    readonly phone: FieldRef<"CareerTicket", 'String'>
    readonly resumeUrl: FieldRef<"CareerTicket", 'String'>
    readonly resumeName: FieldRef<"CareerTicket", 'String'>
    readonly resumeSize: FieldRef<"CareerTicket", 'Int'>
    readonly resumeType: FieldRef<"CareerTicket", 'FileType'>
    readonly createdAt: FieldRef<"CareerTicket", 'DateTime'>
    readonly updatedAt: FieldRef<"CareerTicket", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CareerTicket findUnique
   */
  export type CareerTicketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareerTicket
     */
    select?: CareerTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareerTicket
     */
    omit?: CareerTicketOmit<ExtArgs> | null
    /**
     * Filter, which CareerTicket to fetch.
     */
    where: CareerTicketWhereUniqueInput
  }

  /**
   * CareerTicket findUniqueOrThrow
   */
  export type CareerTicketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareerTicket
     */
    select?: CareerTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareerTicket
     */
    omit?: CareerTicketOmit<ExtArgs> | null
    /**
     * Filter, which CareerTicket to fetch.
     */
    where: CareerTicketWhereUniqueInput
  }

  /**
   * CareerTicket findFirst
   */
  export type CareerTicketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareerTicket
     */
    select?: CareerTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareerTicket
     */
    omit?: CareerTicketOmit<ExtArgs> | null
    /**
     * Filter, which CareerTicket to fetch.
     */
    where?: CareerTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CareerTickets to fetch.
     */
    orderBy?: CareerTicketOrderByWithRelationInput | CareerTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CareerTickets.
     */
    cursor?: CareerTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CareerTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CareerTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CareerTickets.
     */
    distinct?: CareerTicketScalarFieldEnum | CareerTicketScalarFieldEnum[]
  }

  /**
   * CareerTicket findFirstOrThrow
   */
  export type CareerTicketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareerTicket
     */
    select?: CareerTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareerTicket
     */
    omit?: CareerTicketOmit<ExtArgs> | null
    /**
     * Filter, which CareerTicket to fetch.
     */
    where?: CareerTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CareerTickets to fetch.
     */
    orderBy?: CareerTicketOrderByWithRelationInput | CareerTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CareerTickets.
     */
    cursor?: CareerTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CareerTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CareerTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CareerTickets.
     */
    distinct?: CareerTicketScalarFieldEnum | CareerTicketScalarFieldEnum[]
  }

  /**
   * CareerTicket findMany
   */
  export type CareerTicketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareerTicket
     */
    select?: CareerTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareerTicket
     */
    omit?: CareerTicketOmit<ExtArgs> | null
    /**
     * Filter, which CareerTickets to fetch.
     */
    where?: CareerTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CareerTickets to fetch.
     */
    orderBy?: CareerTicketOrderByWithRelationInput | CareerTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CareerTickets.
     */
    cursor?: CareerTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CareerTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CareerTickets.
     */
    skip?: number
    distinct?: CareerTicketScalarFieldEnum | CareerTicketScalarFieldEnum[]
  }

  /**
   * CareerTicket create
   */
  export type CareerTicketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareerTicket
     */
    select?: CareerTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareerTicket
     */
    omit?: CareerTicketOmit<ExtArgs> | null
    /**
     * The data needed to create a CareerTicket.
     */
    data: XOR<CareerTicketCreateInput, CareerTicketUncheckedCreateInput>
  }

  /**
   * CareerTicket createMany
   */
  export type CareerTicketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CareerTickets.
     */
    data: CareerTicketCreateManyInput | CareerTicketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CareerTicket update
   */
  export type CareerTicketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareerTicket
     */
    select?: CareerTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareerTicket
     */
    omit?: CareerTicketOmit<ExtArgs> | null
    /**
     * The data needed to update a CareerTicket.
     */
    data: XOR<CareerTicketUpdateInput, CareerTicketUncheckedUpdateInput>
    /**
     * Choose, which CareerTicket to update.
     */
    where: CareerTicketWhereUniqueInput
  }

  /**
   * CareerTicket updateMany
   */
  export type CareerTicketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CareerTickets.
     */
    data: XOR<CareerTicketUpdateManyMutationInput, CareerTicketUncheckedUpdateManyInput>
    /**
     * Filter which CareerTickets to update
     */
    where?: CareerTicketWhereInput
    /**
     * Limit how many CareerTickets to update.
     */
    limit?: number
  }

  /**
   * CareerTicket upsert
   */
  export type CareerTicketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareerTicket
     */
    select?: CareerTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareerTicket
     */
    omit?: CareerTicketOmit<ExtArgs> | null
    /**
     * The filter to search for the CareerTicket to update in case it exists.
     */
    where: CareerTicketWhereUniqueInput
    /**
     * In case the CareerTicket found by the `where` argument doesn't exist, create a new CareerTicket with this data.
     */
    create: XOR<CareerTicketCreateInput, CareerTicketUncheckedCreateInput>
    /**
     * In case the CareerTicket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CareerTicketUpdateInput, CareerTicketUncheckedUpdateInput>
  }

  /**
   * CareerTicket delete
   */
  export type CareerTicketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareerTicket
     */
    select?: CareerTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareerTicket
     */
    omit?: CareerTicketOmit<ExtArgs> | null
    /**
     * Filter which CareerTicket to delete.
     */
    where: CareerTicketWhereUniqueInput
  }

  /**
   * CareerTicket deleteMany
   */
  export type CareerTicketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CareerTickets to delete
     */
    where?: CareerTicketWhereInput
    /**
     * Limit how many CareerTickets to delete.
     */
    limit?: number
  }

  /**
   * CareerTicket without action
   */
  export type CareerTicketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareerTicket
     */
    select?: CareerTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareerTicket
     */
    omit?: CareerTicketOmit<ExtArgs> | null
  }


  /**
   * Model Image
   */

  export type AggregateImage = {
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  export type ImageAvgAggregateOutputType = {
    width: number | null
    height: number | null
    size: number | null
    sortOrder: number | null
  }

  export type ImageSumAggregateOutputType = {
    width: number | null
    height: number | null
    size: number | null
    sortOrder: number | null
  }

  export type ImageMinAggregateOutputType = {
    id: string | null
    s3Key: string | null
    url: string | null
    filename: string | null
    alt: string | null
    title: string | null
    width: number | null
    height: number | null
    size: number | null
    mimeType: string | null
    category: $Enums.ProjectType | null
    isBackdrop: boolean | null
    isActive: boolean | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ImageMaxAggregateOutputType = {
    id: string | null
    s3Key: string | null
    url: string | null
    filename: string | null
    alt: string | null
    title: string | null
    width: number | null
    height: number | null
    size: number | null
    mimeType: string | null
    category: $Enums.ProjectType | null
    isBackdrop: boolean | null
    isActive: boolean | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ImageCountAggregateOutputType = {
    id: number
    s3Key: number
    url: number
    filename: number
    alt: number
    title: number
    width: number
    height: number
    size: number
    mimeType: number
    category: number
    isBackdrop: number
    isActive: number
    sortOrder: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ImageAvgAggregateInputType = {
    width?: true
    height?: true
    size?: true
    sortOrder?: true
  }

  export type ImageSumAggregateInputType = {
    width?: true
    height?: true
    size?: true
    sortOrder?: true
  }

  export type ImageMinAggregateInputType = {
    id?: true
    s3Key?: true
    url?: true
    filename?: true
    alt?: true
    title?: true
    width?: true
    height?: true
    size?: true
    mimeType?: true
    category?: true
    isBackdrop?: true
    isActive?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ImageMaxAggregateInputType = {
    id?: true
    s3Key?: true
    url?: true
    filename?: true
    alt?: true
    title?: true
    width?: true
    height?: true
    size?: true
    mimeType?: true
    category?: true
    isBackdrop?: true
    isActive?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ImageCountAggregateInputType = {
    id?: true
    s3Key?: true
    url?: true
    filename?: true
    alt?: true
    title?: true
    width?: true
    height?: true
    size?: true
    mimeType?: true
    category?: true
    isBackdrop?: true
    isActive?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Image to aggregate.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Images
    **/
    _count?: true | ImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImageMaxAggregateInputType
  }

  export type GetImageAggregateType<T extends ImageAggregateArgs> = {
        [P in keyof T & keyof AggregateImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImage[P]>
      : GetScalarType<T[P], AggregateImage[P]>
  }




  export type ImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithAggregationInput | ImageOrderByWithAggregationInput[]
    by: ImageScalarFieldEnum[] | ImageScalarFieldEnum
    having?: ImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImageCountAggregateInputType | true
    _avg?: ImageAvgAggregateInputType
    _sum?: ImageSumAggregateInputType
    _min?: ImageMinAggregateInputType
    _max?: ImageMaxAggregateInputType
  }

  export type ImageGroupByOutputType = {
    id: string
    s3Key: string
    url: string
    filename: string
    alt: string | null
    title: string | null
    width: number | null
    height: number | null
    size: number | null
    mimeType: string
    category: $Enums.ProjectType
    isBackdrop: boolean
    isActive: boolean
    sortOrder: number
    createdAt: Date
    updatedAt: Date
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  type GetImageGroupByPayload<T extends ImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageGroupByOutputType[P]>
            : GetScalarType<T[P], ImageGroupByOutputType[P]>
        }
      >
    >


  export type ImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    s3Key?: boolean
    url?: boolean
    filename?: boolean
    alt?: boolean
    title?: boolean
    width?: boolean
    height?: boolean
    size?: boolean
    mimeType?: boolean
    category?: boolean
    isBackdrop?: boolean
    isActive?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["image"]>



  export type ImageSelectScalar = {
    id?: boolean
    s3Key?: boolean
    url?: boolean
    filename?: boolean
    alt?: boolean
    title?: boolean
    width?: boolean
    height?: boolean
    size?: boolean
    mimeType?: boolean
    category?: boolean
    isBackdrop?: boolean
    isActive?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "s3Key" | "url" | "filename" | "alt" | "title" | "width" | "height" | "size" | "mimeType" | "category" | "isBackdrop" | "isActive" | "sortOrder" | "createdAt" | "updatedAt", ExtArgs["result"]["image"]>

  export type $ImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Image"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      s3Key: string
      url: string
      filename: string
      alt: string | null
      title: string | null
      width: number | null
      height: number | null
      size: number | null
      mimeType: string
      category: $Enums.ProjectType
      isBackdrop: boolean
      isActive: boolean
      sortOrder: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["image"]>
    composites: {}
  }

  type ImageGetPayload<S extends boolean | null | undefined | ImageDefaultArgs> = $Result.GetResult<Prisma.$ImagePayload, S>

  type ImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImageCountAggregateInputType | true
    }

  export interface ImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Image'], meta: { name: 'Image' } }
    /**
     * Find zero or one Image that matches the filter.
     * @param {ImageFindUniqueArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImageFindUniqueArgs>(args: SelectSubset<T, ImageFindUniqueArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Image that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImageFindUniqueOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImageFindUniqueOrThrowArgs>(args: SelectSubset<T, ImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImageFindFirstArgs>(args?: SelectSubset<T, ImageFindFirstArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImageFindFirstOrThrowArgs>(args?: SelectSubset<T, ImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.image.findMany()
     * 
     * // Get first 10 Images
     * const images = await prisma.image.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imageWithIdOnly = await prisma.image.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImageFindManyArgs>(args?: SelectSubset<T, ImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Image.
     * @param {ImageCreateArgs} args - Arguments to create a Image.
     * @example
     * // Create one Image
     * const Image = await prisma.image.create({
     *   data: {
     *     // ... data to create a Image
     *   }
     * })
     * 
     */
    create<T extends ImageCreateArgs>(args: SelectSubset<T, ImageCreateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Images.
     * @param {ImageCreateManyArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImageCreateManyArgs>(args?: SelectSubset<T, ImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Image.
     * @param {ImageDeleteArgs} args - Arguments to delete one Image.
     * @example
     * // Delete one Image
     * const Image = await prisma.image.delete({
     *   where: {
     *     // ... filter to delete one Image
     *   }
     * })
     * 
     */
    delete<T extends ImageDeleteArgs>(args: SelectSubset<T, ImageDeleteArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Image.
     * @param {ImageUpdateArgs} args - Arguments to update one Image.
     * @example
     * // Update one Image
     * const image = await prisma.image.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImageUpdateArgs>(args: SelectSubset<T, ImageUpdateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Images.
     * @param {ImageDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.image.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImageDeleteManyArgs>(args?: SelectSubset<T, ImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImageUpdateManyArgs>(args: SelectSubset<T, ImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Image.
     * @param {ImageUpsertArgs} args - Arguments to update or create a Image.
     * @example
     * // Update or create a Image
     * const image = await prisma.image.upsert({
     *   create: {
     *     // ... data to create a Image
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Image we want to update
     *   }
     * })
     */
    upsert<T extends ImageUpsertArgs>(args: SelectSubset<T, ImageUpsertArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.image.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
    **/
    count<T extends ImageCountArgs>(
      args?: Subset<T, ImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ImageAggregateArgs>(args: Subset<T, ImageAggregateArgs>): Prisma.PrismaPromise<GetImageAggregateType<T>>

    /**
     * Group by Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImageGroupByArgs['orderBy'] }
        : { orderBy?: ImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Image model
   */
  readonly fields: ImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Image.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Image model
   */
  interface ImageFieldRefs {
    readonly id: FieldRef<"Image", 'String'>
    readonly s3Key: FieldRef<"Image", 'String'>
    readonly url: FieldRef<"Image", 'String'>
    readonly filename: FieldRef<"Image", 'String'>
    readonly alt: FieldRef<"Image", 'String'>
    readonly title: FieldRef<"Image", 'String'>
    readonly width: FieldRef<"Image", 'Int'>
    readonly height: FieldRef<"Image", 'Int'>
    readonly size: FieldRef<"Image", 'Int'>
    readonly mimeType: FieldRef<"Image", 'String'>
    readonly category: FieldRef<"Image", 'ProjectType'>
    readonly isBackdrop: FieldRef<"Image", 'Boolean'>
    readonly isActive: FieldRef<"Image", 'Boolean'>
    readonly sortOrder: FieldRef<"Image", 'Int'>
    readonly createdAt: FieldRef<"Image", 'DateTime'>
    readonly updatedAt: FieldRef<"Image", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Image findUnique
   */
  export type ImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findUniqueOrThrow
   */
  export type ImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findFirst
   */
  export type ImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findFirstOrThrow
   */
  export type ImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findMany
   */
  export type ImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image create
   */
  export type ImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * The data needed to create a Image.
     */
    data: XOR<ImageCreateInput, ImageUncheckedCreateInput>
  }

  /**
   * Image createMany
   */
  export type ImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Image update
   */
  export type ImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * The data needed to update a Image.
     */
    data: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
    /**
     * Choose, which Image to update.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image updateMany
   */
  export type ImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to update.
     */
    limit?: number
  }

  /**
   * Image upsert
   */
  export type ImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * The filter to search for the Image to update in case it exists.
     */
    where: ImageWhereUniqueInput
    /**
     * In case the Image found by the `where` argument doesn't exist, create a new Image with this data.
     */
    create: XOR<ImageCreateInput, ImageUncheckedCreateInput>
    /**
     * In case the Image was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
  }

  /**
   * Image delete
   */
  export type ImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Filter which Image to delete.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image deleteMany
   */
  export type ImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Images to delete
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to delete.
     */
    limit?: number
  }

  /**
   * Image without action
   */
  export type ImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
  }


  /**
   * Model ImageCollection
   */

  export type AggregateImageCollection = {
    _count: ImageCollectionCountAggregateOutputType | null
    _avg: ImageCollectionAvgAggregateOutputType | null
    _sum: ImageCollectionSumAggregateOutputType | null
    _min: ImageCollectionMinAggregateOutputType | null
    _max: ImageCollectionMaxAggregateOutputType | null
  }

  export type ImageCollectionAvgAggregateOutputType = {
    sortOrder: number | null
  }

  export type ImageCollectionSumAggregateOutputType = {
    sortOrder: number | null
  }

  export type ImageCollectionMinAggregateOutputType = {
    id: string | null
    s3Key: string | null
    name: string | null
    description: string | null
    category: $Enums.ProjectType | null
    isActive: boolean | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ImageCollectionMaxAggregateOutputType = {
    id: string | null
    s3Key: string | null
    name: string | null
    description: string | null
    category: $Enums.ProjectType | null
    isActive: boolean | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ImageCollectionCountAggregateOutputType = {
    id: number
    s3Key: number
    name: number
    description: number
    category: number
    isActive: number
    sortOrder: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ImageCollectionAvgAggregateInputType = {
    sortOrder?: true
  }

  export type ImageCollectionSumAggregateInputType = {
    sortOrder?: true
  }

  export type ImageCollectionMinAggregateInputType = {
    id?: true
    s3Key?: true
    name?: true
    description?: true
    category?: true
    isActive?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ImageCollectionMaxAggregateInputType = {
    id?: true
    s3Key?: true
    name?: true
    description?: true
    category?: true
    isActive?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ImageCollectionCountAggregateInputType = {
    id?: true
    s3Key?: true
    name?: true
    description?: true
    category?: true
    isActive?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ImageCollectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImageCollection to aggregate.
     */
    where?: ImageCollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImageCollections to fetch.
     */
    orderBy?: ImageCollectionOrderByWithRelationInput | ImageCollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImageCollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImageCollections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImageCollections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ImageCollections
    **/
    _count?: true | ImageCollectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImageCollectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImageCollectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImageCollectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImageCollectionMaxAggregateInputType
  }

  export type GetImageCollectionAggregateType<T extends ImageCollectionAggregateArgs> = {
        [P in keyof T & keyof AggregateImageCollection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImageCollection[P]>
      : GetScalarType<T[P], AggregateImageCollection[P]>
  }




  export type ImageCollectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageCollectionWhereInput
    orderBy?: ImageCollectionOrderByWithAggregationInput | ImageCollectionOrderByWithAggregationInput[]
    by: ImageCollectionScalarFieldEnum[] | ImageCollectionScalarFieldEnum
    having?: ImageCollectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImageCollectionCountAggregateInputType | true
    _avg?: ImageCollectionAvgAggregateInputType
    _sum?: ImageCollectionSumAggregateInputType
    _min?: ImageCollectionMinAggregateInputType
    _max?: ImageCollectionMaxAggregateInputType
  }

  export type ImageCollectionGroupByOutputType = {
    id: string
    s3Key: string
    name: string
    description: string | null
    category: $Enums.ProjectType
    isActive: boolean
    sortOrder: number
    createdAt: Date
    updatedAt: Date
    _count: ImageCollectionCountAggregateOutputType | null
    _avg: ImageCollectionAvgAggregateOutputType | null
    _sum: ImageCollectionSumAggregateOutputType | null
    _min: ImageCollectionMinAggregateOutputType | null
    _max: ImageCollectionMaxAggregateOutputType | null
  }

  type GetImageCollectionGroupByPayload<T extends ImageCollectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImageCollectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImageCollectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageCollectionGroupByOutputType[P]>
            : GetScalarType<T[P], ImageCollectionGroupByOutputType[P]>
        }
      >
    >


  export type ImageCollectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    s3Key?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    isActive?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["imageCollection"]>



  export type ImageCollectionSelectScalar = {
    id?: boolean
    s3Key?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    isActive?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ImageCollectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "s3Key" | "name" | "description" | "category" | "isActive" | "sortOrder" | "createdAt" | "updatedAt", ExtArgs["result"]["imageCollection"]>

  export type $ImageCollectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ImageCollection"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      s3Key: string
      name: string
      description: string | null
      category: $Enums.ProjectType
      isActive: boolean
      sortOrder: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["imageCollection"]>
    composites: {}
  }

  type ImageCollectionGetPayload<S extends boolean | null | undefined | ImageCollectionDefaultArgs> = $Result.GetResult<Prisma.$ImageCollectionPayload, S>

  type ImageCollectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImageCollectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImageCollectionCountAggregateInputType | true
    }

  export interface ImageCollectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ImageCollection'], meta: { name: 'ImageCollection' } }
    /**
     * Find zero or one ImageCollection that matches the filter.
     * @param {ImageCollectionFindUniqueArgs} args - Arguments to find a ImageCollection
     * @example
     * // Get one ImageCollection
     * const imageCollection = await prisma.imageCollection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImageCollectionFindUniqueArgs>(args: SelectSubset<T, ImageCollectionFindUniqueArgs<ExtArgs>>): Prisma__ImageCollectionClient<$Result.GetResult<Prisma.$ImageCollectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ImageCollection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImageCollectionFindUniqueOrThrowArgs} args - Arguments to find a ImageCollection
     * @example
     * // Get one ImageCollection
     * const imageCollection = await prisma.imageCollection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImageCollectionFindUniqueOrThrowArgs>(args: SelectSubset<T, ImageCollectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImageCollectionClient<$Result.GetResult<Prisma.$ImageCollectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ImageCollection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageCollectionFindFirstArgs} args - Arguments to find a ImageCollection
     * @example
     * // Get one ImageCollection
     * const imageCollection = await prisma.imageCollection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImageCollectionFindFirstArgs>(args?: SelectSubset<T, ImageCollectionFindFirstArgs<ExtArgs>>): Prisma__ImageCollectionClient<$Result.GetResult<Prisma.$ImageCollectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ImageCollection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageCollectionFindFirstOrThrowArgs} args - Arguments to find a ImageCollection
     * @example
     * // Get one ImageCollection
     * const imageCollection = await prisma.imageCollection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImageCollectionFindFirstOrThrowArgs>(args?: SelectSubset<T, ImageCollectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImageCollectionClient<$Result.GetResult<Prisma.$ImageCollectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ImageCollections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageCollectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ImageCollections
     * const imageCollections = await prisma.imageCollection.findMany()
     * 
     * // Get first 10 ImageCollections
     * const imageCollections = await prisma.imageCollection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imageCollectionWithIdOnly = await prisma.imageCollection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImageCollectionFindManyArgs>(args?: SelectSubset<T, ImageCollectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImageCollectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ImageCollection.
     * @param {ImageCollectionCreateArgs} args - Arguments to create a ImageCollection.
     * @example
     * // Create one ImageCollection
     * const ImageCollection = await prisma.imageCollection.create({
     *   data: {
     *     // ... data to create a ImageCollection
     *   }
     * })
     * 
     */
    create<T extends ImageCollectionCreateArgs>(args: SelectSubset<T, ImageCollectionCreateArgs<ExtArgs>>): Prisma__ImageCollectionClient<$Result.GetResult<Prisma.$ImageCollectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ImageCollections.
     * @param {ImageCollectionCreateManyArgs} args - Arguments to create many ImageCollections.
     * @example
     * // Create many ImageCollections
     * const imageCollection = await prisma.imageCollection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImageCollectionCreateManyArgs>(args?: SelectSubset<T, ImageCollectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ImageCollection.
     * @param {ImageCollectionDeleteArgs} args - Arguments to delete one ImageCollection.
     * @example
     * // Delete one ImageCollection
     * const ImageCollection = await prisma.imageCollection.delete({
     *   where: {
     *     // ... filter to delete one ImageCollection
     *   }
     * })
     * 
     */
    delete<T extends ImageCollectionDeleteArgs>(args: SelectSubset<T, ImageCollectionDeleteArgs<ExtArgs>>): Prisma__ImageCollectionClient<$Result.GetResult<Prisma.$ImageCollectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ImageCollection.
     * @param {ImageCollectionUpdateArgs} args - Arguments to update one ImageCollection.
     * @example
     * // Update one ImageCollection
     * const imageCollection = await prisma.imageCollection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImageCollectionUpdateArgs>(args: SelectSubset<T, ImageCollectionUpdateArgs<ExtArgs>>): Prisma__ImageCollectionClient<$Result.GetResult<Prisma.$ImageCollectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ImageCollections.
     * @param {ImageCollectionDeleteManyArgs} args - Arguments to filter ImageCollections to delete.
     * @example
     * // Delete a few ImageCollections
     * const { count } = await prisma.imageCollection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImageCollectionDeleteManyArgs>(args?: SelectSubset<T, ImageCollectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ImageCollections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageCollectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ImageCollections
     * const imageCollection = await prisma.imageCollection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImageCollectionUpdateManyArgs>(args: SelectSubset<T, ImageCollectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ImageCollection.
     * @param {ImageCollectionUpsertArgs} args - Arguments to update or create a ImageCollection.
     * @example
     * // Update or create a ImageCollection
     * const imageCollection = await prisma.imageCollection.upsert({
     *   create: {
     *     // ... data to create a ImageCollection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ImageCollection we want to update
     *   }
     * })
     */
    upsert<T extends ImageCollectionUpsertArgs>(args: SelectSubset<T, ImageCollectionUpsertArgs<ExtArgs>>): Prisma__ImageCollectionClient<$Result.GetResult<Prisma.$ImageCollectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ImageCollections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageCollectionCountArgs} args - Arguments to filter ImageCollections to count.
     * @example
     * // Count the number of ImageCollections
     * const count = await prisma.imageCollection.count({
     *   where: {
     *     // ... the filter for the ImageCollections we want to count
     *   }
     * })
    **/
    count<T extends ImageCollectionCountArgs>(
      args?: Subset<T, ImageCollectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageCollectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ImageCollection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageCollectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ImageCollectionAggregateArgs>(args: Subset<T, ImageCollectionAggregateArgs>): Prisma.PrismaPromise<GetImageCollectionAggregateType<T>>

    /**
     * Group by ImageCollection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageCollectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ImageCollectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImageCollectionGroupByArgs['orderBy'] }
        : { orderBy?: ImageCollectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ImageCollectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageCollectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ImageCollection model
   */
  readonly fields: ImageCollectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ImageCollection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImageCollectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ImageCollection model
   */
  interface ImageCollectionFieldRefs {
    readonly id: FieldRef<"ImageCollection", 'String'>
    readonly s3Key: FieldRef<"ImageCollection", 'String'>
    readonly name: FieldRef<"ImageCollection", 'String'>
    readonly description: FieldRef<"ImageCollection", 'String'>
    readonly category: FieldRef<"ImageCollection", 'ProjectType'>
    readonly isActive: FieldRef<"ImageCollection", 'Boolean'>
    readonly sortOrder: FieldRef<"ImageCollection", 'Int'>
    readonly createdAt: FieldRef<"ImageCollection", 'DateTime'>
    readonly updatedAt: FieldRef<"ImageCollection", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ImageCollection findUnique
   */
  export type ImageCollectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageCollection
     */
    select?: ImageCollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageCollection
     */
    omit?: ImageCollectionOmit<ExtArgs> | null
    /**
     * Filter, which ImageCollection to fetch.
     */
    where: ImageCollectionWhereUniqueInput
  }

  /**
   * ImageCollection findUniqueOrThrow
   */
  export type ImageCollectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageCollection
     */
    select?: ImageCollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageCollection
     */
    omit?: ImageCollectionOmit<ExtArgs> | null
    /**
     * Filter, which ImageCollection to fetch.
     */
    where: ImageCollectionWhereUniqueInput
  }

  /**
   * ImageCollection findFirst
   */
  export type ImageCollectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageCollection
     */
    select?: ImageCollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageCollection
     */
    omit?: ImageCollectionOmit<ExtArgs> | null
    /**
     * Filter, which ImageCollection to fetch.
     */
    where?: ImageCollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImageCollections to fetch.
     */
    orderBy?: ImageCollectionOrderByWithRelationInput | ImageCollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImageCollections.
     */
    cursor?: ImageCollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImageCollections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImageCollections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImageCollections.
     */
    distinct?: ImageCollectionScalarFieldEnum | ImageCollectionScalarFieldEnum[]
  }

  /**
   * ImageCollection findFirstOrThrow
   */
  export type ImageCollectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageCollection
     */
    select?: ImageCollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageCollection
     */
    omit?: ImageCollectionOmit<ExtArgs> | null
    /**
     * Filter, which ImageCollection to fetch.
     */
    where?: ImageCollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImageCollections to fetch.
     */
    orderBy?: ImageCollectionOrderByWithRelationInput | ImageCollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImageCollections.
     */
    cursor?: ImageCollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImageCollections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImageCollections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImageCollections.
     */
    distinct?: ImageCollectionScalarFieldEnum | ImageCollectionScalarFieldEnum[]
  }

  /**
   * ImageCollection findMany
   */
  export type ImageCollectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageCollection
     */
    select?: ImageCollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageCollection
     */
    omit?: ImageCollectionOmit<ExtArgs> | null
    /**
     * Filter, which ImageCollections to fetch.
     */
    where?: ImageCollectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImageCollections to fetch.
     */
    orderBy?: ImageCollectionOrderByWithRelationInput | ImageCollectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ImageCollections.
     */
    cursor?: ImageCollectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImageCollections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImageCollections.
     */
    skip?: number
    distinct?: ImageCollectionScalarFieldEnum | ImageCollectionScalarFieldEnum[]
  }

  /**
   * ImageCollection create
   */
  export type ImageCollectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageCollection
     */
    select?: ImageCollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageCollection
     */
    omit?: ImageCollectionOmit<ExtArgs> | null
    /**
     * The data needed to create a ImageCollection.
     */
    data: XOR<ImageCollectionCreateInput, ImageCollectionUncheckedCreateInput>
  }

  /**
   * ImageCollection createMany
   */
  export type ImageCollectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ImageCollections.
     */
    data: ImageCollectionCreateManyInput | ImageCollectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ImageCollection update
   */
  export type ImageCollectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageCollection
     */
    select?: ImageCollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageCollection
     */
    omit?: ImageCollectionOmit<ExtArgs> | null
    /**
     * The data needed to update a ImageCollection.
     */
    data: XOR<ImageCollectionUpdateInput, ImageCollectionUncheckedUpdateInput>
    /**
     * Choose, which ImageCollection to update.
     */
    where: ImageCollectionWhereUniqueInput
  }

  /**
   * ImageCollection updateMany
   */
  export type ImageCollectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ImageCollections.
     */
    data: XOR<ImageCollectionUpdateManyMutationInput, ImageCollectionUncheckedUpdateManyInput>
    /**
     * Filter which ImageCollections to update
     */
    where?: ImageCollectionWhereInput
    /**
     * Limit how many ImageCollections to update.
     */
    limit?: number
  }

  /**
   * ImageCollection upsert
   */
  export type ImageCollectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageCollection
     */
    select?: ImageCollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageCollection
     */
    omit?: ImageCollectionOmit<ExtArgs> | null
    /**
     * The filter to search for the ImageCollection to update in case it exists.
     */
    where: ImageCollectionWhereUniqueInput
    /**
     * In case the ImageCollection found by the `where` argument doesn't exist, create a new ImageCollection with this data.
     */
    create: XOR<ImageCollectionCreateInput, ImageCollectionUncheckedCreateInput>
    /**
     * In case the ImageCollection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImageCollectionUpdateInput, ImageCollectionUncheckedUpdateInput>
  }

  /**
   * ImageCollection delete
   */
  export type ImageCollectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageCollection
     */
    select?: ImageCollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageCollection
     */
    omit?: ImageCollectionOmit<ExtArgs> | null
    /**
     * Filter which ImageCollection to delete.
     */
    where: ImageCollectionWhereUniqueInput
  }

  /**
   * ImageCollection deleteMany
   */
  export type ImageCollectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ImageCollections to delete
     */
    where?: ImageCollectionWhereInput
    /**
     * Limit how many ImageCollections to delete.
     */
    limit?: number
  }

  /**
   * ImageCollection without action
   */
  export type ImageCollectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageCollection
     */
    select?: ImageCollectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ImageCollection
     */
    omit?: ImageCollectionOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AuthenticatedUserScalarFieldEnum: {
    id: 'id',
    s3Key: 's3Key',
    email: 'email',
    passwordHash: 'passwordHash',
    role: 'role',
    lastLogin: 'lastLogin',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AuthenticatedUserScalarFieldEnum = (typeof AuthenticatedUserScalarFieldEnum)[keyof typeof AuthenticatedUserScalarFieldEnum]


  export const ProjectTicketScalarFieldEnum: {
    id: 'id',
    s3Key: 's3Key',
    name: 'name',
    email: 'email',
    phone: 'phone',
    zipCode: 'zipCode',
    projectType: 'projectType',
    projectStart: 'projectStart',
    projectStatus: 'projectStatus',
    message: 'message',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectTicketScalarFieldEnum = (typeof ProjectTicketScalarFieldEnum)[keyof typeof ProjectTicketScalarFieldEnum]


  export const CareerTicketScalarFieldEnum: {
    id: 'id',
    s3Key: 's3Key',
    name: 'name',
    email: 'email',
    phone: 'phone',
    resumeUrl: 'resumeUrl',
    resumeName: 'resumeName',
    resumeSize: 'resumeSize',
    resumeType: 'resumeType',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CareerTicketScalarFieldEnum = (typeof CareerTicketScalarFieldEnum)[keyof typeof CareerTicketScalarFieldEnum]


  export const ImageScalarFieldEnum: {
    id: 'id',
    s3Key: 's3Key',
    url: 'url',
    filename: 'filename',
    alt: 'alt',
    title: 'title',
    width: 'width',
    height: 'height',
    size: 'size',
    mimeType: 'mimeType',
    category: 'category',
    isBackdrop: 'isBackdrop',
    isActive: 'isActive',
    sortOrder: 'sortOrder',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ImageScalarFieldEnum = (typeof ImageScalarFieldEnum)[keyof typeof ImageScalarFieldEnum]


  export const ImageCollectionScalarFieldEnum: {
    id: 'id',
    s3Key: 's3Key',
    name: 'name',
    description: 'description',
    category: 'category',
    isActive: 'isActive',
    sortOrder: 'sortOrder',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ImageCollectionScalarFieldEnum = (typeof ImageCollectionScalarFieldEnum)[keyof typeof ImageCollectionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const AuthenticatedUserOrderByRelevanceFieldEnum: {
    id: 'id',
    s3Key: 's3Key',
    email: 'email',
    passwordHash: 'passwordHash'
  };

  export type AuthenticatedUserOrderByRelevanceFieldEnum = (typeof AuthenticatedUserOrderByRelevanceFieldEnum)[keyof typeof AuthenticatedUserOrderByRelevanceFieldEnum]


  export const ProjectTicketOrderByRelevanceFieldEnum: {
    id: 'id',
    s3Key: 's3Key',
    name: 'name',
    email: 'email',
    phone: 'phone',
    zipCode: 'zipCode',
    message: 'message'
  };

  export type ProjectTicketOrderByRelevanceFieldEnum = (typeof ProjectTicketOrderByRelevanceFieldEnum)[keyof typeof ProjectTicketOrderByRelevanceFieldEnum]


  export const CareerTicketOrderByRelevanceFieldEnum: {
    id: 'id',
    s3Key: 's3Key',
    name: 'name',
    email: 'email',
    phone: 'phone',
    resumeUrl: 'resumeUrl',
    resumeName: 'resumeName'
  };

  export type CareerTicketOrderByRelevanceFieldEnum = (typeof CareerTicketOrderByRelevanceFieldEnum)[keyof typeof CareerTicketOrderByRelevanceFieldEnum]


  export const ImageOrderByRelevanceFieldEnum: {
    id: 'id',
    s3Key: 's3Key',
    url: 'url',
    filename: 'filename',
    alt: 'alt',
    title: 'title',
    mimeType: 'mimeType'
  };

  export type ImageOrderByRelevanceFieldEnum = (typeof ImageOrderByRelevanceFieldEnum)[keyof typeof ImageOrderByRelevanceFieldEnum]


  export const ImageCollectionOrderByRelevanceFieldEnum: {
    id: 'id',
    s3Key: 's3Key',
    name: 'name',
    description: 'description'
  };

  export type ImageCollectionOrderByRelevanceFieldEnum = (typeof ImageCollectionOrderByRelevanceFieldEnum)[keyof typeof ImageCollectionOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'ProjectType'
   */
  export type EnumProjectTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectType'>
    


  /**
   * Reference to a field of type 'ProjectStart'
   */
  export type EnumProjectStartFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectStart'>
    


  /**
   * Reference to a field of type 'ProjectStatus'
   */
  export type EnumProjectStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectStatus'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'FileType'
   */
  export type EnumFileTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FileType'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type AuthenticatedUserWhereInput = {
    AND?: AuthenticatedUserWhereInput | AuthenticatedUserWhereInput[]
    OR?: AuthenticatedUserWhereInput[]
    NOT?: AuthenticatedUserWhereInput | AuthenticatedUserWhereInput[]
    id?: StringFilter<"AuthenticatedUser"> | string
    s3Key?: StringFilter<"AuthenticatedUser"> | string
    email?: StringFilter<"AuthenticatedUser"> | string
    passwordHash?: StringFilter<"AuthenticatedUser"> | string
    role?: EnumRoleFilter<"AuthenticatedUser"> | $Enums.Role
    lastLogin?: DateTimeNullableFilter<"AuthenticatedUser"> | Date | string | null
    isActive?: BoolFilter<"AuthenticatedUser"> | boolean
    createdAt?: DateTimeFilter<"AuthenticatedUser"> | Date | string
    updatedAt?: DateTimeFilter<"AuthenticatedUser"> | Date | string
  }

  export type AuthenticatedUserOrderByWithRelationInput = {
    id?: SortOrder
    s3Key?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: AuthenticatedUserOrderByRelevanceInput
  }

  export type AuthenticatedUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    s3Key?: string
    email?: string
    AND?: AuthenticatedUserWhereInput | AuthenticatedUserWhereInput[]
    OR?: AuthenticatedUserWhereInput[]
    NOT?: AuthenticatedUserWhereInput | AuthenticatedUserWhereInput[]
    passwordHash?: StringFilter<"AuthenticatedUser"> | string
    role?: EnumRoleFilter<"AuthenticatedUser"> | $Enums.Role
    lastLogin?: DateTimeNullableFilter<"AuthenticatedUser"> | Date | string | null
    isActive?: BoolFilter<"AuthenticatedUser"> | boolean
    createdAt?: DateTimeFilter<"AuthenticatedUser"> | Date | string
    updatedAt?: DateTimeFilter<"AuthenticatedUser"> | Date | string
  }, "id" | "s3Key" | "email">

  export type AuthenticatedUserOrderByWithAggregationInput = {
    id?: SortOrder
    s3Key?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AuthenticatedUserCountOrderByAggregateInput
    _max?: AuthenticatedUserMaxOrderByAggregateInput
    _min?: AuthenticatedUserMinOrderByAggregateInput
  }

  export type AuthenticatedUserScalarWhereWithAggregatesInput = {
    AND?: AuthenticatedUserScalarWhereWithAggregatesInput | AuthenticatedUserScalarWhereWithAggregatesInput[]
    OR?: AuthenticatedUserScalarWhereWithAggregatesInput[]
    NOT?: AuthenticatedUserScalarWhereWithAggregatesInput | AuthenticatedUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuthenticatedUser"> | string
    s3Key?: StringWithAggregatesFilter<"AuthenticatedUser"> | string
    email?: StringWithAggregatesFilter<"AuthenticatedUser"> | string
    passwordHash?: StringWithAggregatesFilter<"AuthenticatedUser"> | string
    role?: EnumRoleWithAggregatesFilter<"AuthenticatedUser"> | $Enums.Role
    lastLogin?: DateTimeNullableWithAggregatesFilter<"AuthenticatedUser"> | Date | string | null
    isActive?: BoolWithAggregatesFilter<"AuthenticatedUser"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"AuthenticatedUser"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AuthenticatedUser"> | Date | string
  }

  export type ProjectTicketWhereInput = {
    AND?: ProjectTicketWhereInput | ProjectTicketWhereInput[]
    OR?: ProjectTicketWhereInput[]
    NOT?: ProjectTicketWhereInput | ProjectTicketWhereInput[]
    id?: StringFilter<"ProjectTicket"> | string
    s3Key?: StringFilter<"ProjectTicket"> | string
    name?: StringFilter<"ProjectTicket"> | string
    email?: StringFilter<"ProjectTicket"> | string
    phone?: StringFilter<"ProjectTicket"> | string
    zipCode?: StringFilter<"ProjectTicket"> | string
    projectType?: EnumProjectTypeFilter<"ProjectTicket"> | $Enums.ProjectType
    projectStart?: EnumProjectStartFilter<"ProjectTicket"> | $Enums.ProjectStart
    projectStatus?: EnumProjectStatusFilter<"ProjectTicket"> | $Enums.ProjectStatus
    message?: StringFilter<"ProjectTicket"> | string
    createdAt?: DateTimeFilter<"ProjectTicket"> | Date | string
    updatedAt?: DateTimeFilter<"ProjectTicket"> | Date | string
  }

  export type ProjectTicketOrderByWithRelationInput = {
    id?: SortOrder
    s3Key?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    zipCode?: SortOrder
    projectType?: SortOrder
    projectStart?: SortOrder
    projectStatus?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: ProjectTicketOrderByRelevanceInput
  }

  export type ProjectTicketWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    s3Key?: string
    AND?: ProjectTicketWhereInput | ProjectTicketWhereInput[]
    OR?: ProjectTicketWhereInput[]
    NOT?: ProjectTicketWhereInput | ProjectTicketWhereInput[]
    name?: StringFilter<"ProjectTicket"> | string
    email?: StringFilter<"ProjectTicket"> | string
    phone?: StringFilter<"ProjectTicket"> | string
    zipCode?: StringFilter<"ProjectTicket"> | string
    projectType?: EnumProjectTypeFilter<"ProjectTicket"> | $Enums.ProjectType
    projectStart?: EnumProjectStartFilter<"ProjectTicket"> | $Enums.ProjectStart
    projectStatus?: EnumProjectStatusFilter<"ProjectTicket"> | $Enums.ProjectStatus
    message?: StringFilter<"ProjectTicket"> | string
    createdAt?: DateTimeFilter<"ProjectTicket"> | Date | string
    updatedAt?: DateTimeFilter<"ProjectTicket"> | Date | string
  }, "id" | "s3Key">

  export type ProjectTicketOrderByWithAggregationInput = {
    id?: SortOrder
    s3Key?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    zipCode?: SortOrder
    projectType?: SortOrder
    projectStart?: SortOrder
    projectStatus?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectTicketCountOrderByAggregateInput
    _max?: ProjectTicketMaxOrderByAggregateInput
    _min?: ProjectTicketMinOrderByAggregateInput
  }

  export type ProjectTicketScalarWhereWithAggregatesInput = {
    AND?: ProjectTicketScalarWhereWithAggregatesInput | ProjectTicketScalarWhereWithAggregatesInput[]
    OR?: ProjectTicketScalarWhereWithAggregatesInput[]
    NOT?: ProjectTicketScalarWhereWithAggregatesInput | ProjectTicketScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProjectTicket"> | string
    s3Key?: StringWithAggregatesFilter<"ProjectTicket"> | string
    name?: StringWithAggregatesFilter<"ProjectTicket"> | string
    email?: StringWithAggregatesFilter<"ProjectTicket"> | string
    phone?: StringWithAggregatesFilter<"ProjectTicket"> | string
    zipCode?: StringWithAggregatesFilter<"ProjectTicket"> | string
    projectType?: EnumProjectTypeWithAggregatesFilter<"ProjectTicket"> | $Enums.ProjectType
    projectStart?: EnumProjectStartWithAggregatesFilter<"ProjectTicket"> | $Enums.ProjectStart
    projectStatus?: EnumProjectStatusWithAggregatesFilter<"ProjectTicket"> | $Enums.ProjectStatus
    message?: StringWithAggregatesFilter<"ProjectTicket"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ProjectTicket"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProjectTicket"> | Date | string
  }

  export type CareerTicketWhereInput = {
    AND?: CareerTicketWhereInput | CareerTicketWhereInput[]
    OR?: CareerTicketWhereInput[]
    NOT?: CareerTicketWhereInput | CareerTicketWhereInput[]
    id?: StringFilter<"CareerTicket"> | string
    s3Key?: StringFilter<"CareerTicket"> | string
    name?: StringFilter<"CareerTicket"> | string
    email?: StringFilter<"CareerTicket"> | string
    phone?: StringFilter<"CareerTicket"> | string
    resumeUrl?: StringFilter<"CareerTicket"> | string
    resumeName?: StringFilter<"CareerTicket"> | string
    resumeSize?: IntFilter<"CareerTicket"> | number
    resumeType?: EnumFileTypeFilter<"CareerTicket"> | $Enums.FileType
    createdAt?: DateTimeFilter<"CareerTicket"> | Date | string
    updatedAt?: DateTimeFilter<"CareerTicket"> | Date | string
  }

  export type CareerTicketOrderByWithRelationInput = {
    id?: SortOrder
    s3Key?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    resumeUrl?: SortOrder
    resumeName?: SortOrder
    resumeSize?: SortOrder
    resumeType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: CareerTicketOrderByRelevanceInput
  }

  export type CareerTicketWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    s3Key?: string
    AND?: CareerTicketWhereInput | CareerTicketWhereInput[]
    OR?: CareerTicketWhereInput[]
    NOT?: CareerTicketWhereInput | CareerTicketWhereInput[]
    name?: StringFilter<"CareerTicket"> | string
    email?: StringFilter<"CareerTicket"> | string
    phone?: StringFilter<"CareerTicket"> | string
    resumeUrl?: StringFilter<"CareerTicket"> | string
    resumeName?: StringFilter<"CareerTicket"> | string
    resumeSize?: IntFilter<"CareerTicket"> | number
    resumeType?: EnumFileTypeFilter<"CareerTicket"> | $Enums.FileType
    createdAt?: DateTimeFilter<"CareerTicket"> | Date | string
    updatedAt?: DateTimeFilter<"CareerTicket"> | Date | string
  }, "id" | "s3Key">

  export type CareerTicketOrderByWithAggregationInput = {
    id?: SortOrder
    s3Key?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    resumeUrl?: SortOrder
    resumeName?: SortOrder
    resumeSize?: SortOrder
    resumeType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CareerTicketCountOrderByAggregateInput
    _avg?: CareerTicketAvgOrderByAggregateInput
    _max?: CareerTicketMaxOrderByAggregateInput
    _min?: CareerTicketMinOrderByAggregateInput
    _sum?: CareerTicketSumOrderByAggregateInput
  }

  export type CareerTicketScalarWhereWithAggregatesInput = {
    AND?: CareerTicketScalarWhereWithAggregatesInput | CareerTicketScalarWhereWithAggregatesInput[]
    OR?: CareerTicketScalarWhereWithAggregatesInput[]
    NOT?: CareerTicketScalarWhereWithAggregatesInput | CareerTicketScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CareerTicket"> | string
    s3Key?: StringWithAggregatesFilter<"CareerTicket"> | string
    name?: StringWithAggregatesFilter<"CareerTicket"> | string
    email?: StringWithAggregatesFilter<"CareerTicket"> | string
    phone?: StringWithAggregatesFilter<"CareerTicket"> | string
    resumeUrl?: StringWithAggregatesFilter<"CareerTicket"> | string
    resumeName?: StringWithAggregatesFilter<"CareerTicket"> | string
    resumeSize?: IntWithAggregatesFilter<"CareerTicket"> | number
    resumeType?: EnumFileTypeWithAggregatesFilter<"CareerTicket"> | $Enums.FileType
    createdAt?: DateTimeWithAggregatesFilter<"CareerTicket"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CareerTicket"> | Date | string
  }

  export type ImageWhereInput = {
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    id?: StringFilter<"Image"> | string
    s3Key?: StringFilter<"Image"> | string
    url?: StringFilter<"Image"> | string
    filename?: StringFilter<"Image"> | string
    alt?: StringNullableFilter<"Image"> | string | null
    title?: StringNullableFilter<"Image"> | string | null
    width?: IntNullableFilter<"Image"> | number | null
    height?: IntNullableFilter<"Image"> | number | null
    size?: IntNullableFilter<"Image"> | number | null
    mimeType?: StringFilter<"Image"> | string
    category?: EnumProjectTypeFilter<"Image"> | $Enums.ProjectType
    isBackdrop?: BoolFilter<"Image"> | boolean
    isActive?: BoolFilter<"Image"> | boolean
    sortOrder?: IntFilter<"Image"> | number
    createdAt?: DateTimeFilter<"Image"> | Date | string
    updatedAt?: DateTimeFilter<"Image"> | Date | string
  }

  export type ImageOrderByWithRelationInput = {
    id?: SortOrder
    s3Key?: SortOrder
    url?: SortOrder
    filename?: SortOrder
    alt?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    width?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    size?: SortOrderInput | SortOrder
    mimeType?: SortOrder
    category?: SortOrder
    isBackdrop?: SortOrder
    isActive?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: ImageOrderByRelevanceInput
  }

  export type ImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    s3Key?: string
    url?: string
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    filename?: StringFilter<"Image"> | string
    alt?: StringNullableFilter<"Image"> | string | null
    title?: StringNullableFilter<"Image"> | string | null
    width?: IntNullableFilter<"Image"> | number | null
    height?: IntNullableFilter<"Image"> | number | null
    size?: IntNullableFilter<"Image"> | number | null
    mimeType?: StringFilter<"Image"> | string
    category?: EnumProjectTypeFilter<"Image"> | $Enums.ProjectType
    isBackdrop?: BoolFilter<"Image"> | boolean
    isActive?: BoolFilter<"Image"> | boolean
    sortOrder?: IntFilter<"Image"> | number
    createdAt?: DateTimeFilter<"Image"> | Date | string
    updatedAt?: DateTimeFilter<"Image"> | Date | string
  }, "id" | "s3Key" | "url">

  export type ImageOrderByWithAggregationInput = {
    id?: SortOrder
    s3Key?: SortOrder
    url?: SortOrder
    filename?: SortOrder
    alt?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    width?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    size?: SortOrderInput | SortOrder
    mimeType?: SortOrder
    category?: SortOrder
    isBackdrop?: SortOrder
    isActive?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ImageCountOrderByAggregateInput
    _avg?: ImageAvgOrderByAggregateInput
    _max?: ImageMaxOrderByAggregateInput
    _min?: ImageMinOrderByAggregateInput
    _sum?: ImageSumOrderByAggregateInput
  }

  export type ImageScalarWhereWithAggregatesInput = {
    AND?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    OR?: ImageScalarWhereWithAggregatesInput[]
    NOT?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Image"> | string
    s3Key?: StringWithAggregatesFilter<"Image"> | string
    url?: StringWithAggregatesFilter<"Image"> | string
    filename?: StringWithAggregatesFilter<"Image"> | string
    alt?: StringNullableWithAggregatesFilter<"Image"> | string | null
    title?: StringNullableWithAggregatesFilter<"Image"> | string | null
    width?: IntNullableWithAggregatesFilter<"Image"> | number | null
    height?: IntNullableWithAggregatesFilter<"Image"> | number | null
    size?: IntNullableWithAggregatesFilter<"Image"> | number | null
    mimeType?: StringWithAggregatesFilter<"Image"> | string
    category?: EnumProjectTypeWithAggregatesFilter<"Image"> | $Enums.ProjectType
    isBackdrop?: BoolWithAggregatesFilter<"Image"> | boolean
    isActive?: BoolWithAggregatesFilter<"Image"> | boolean
    sortOrder?: IntWithAggregatesFilter<"Image"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Image"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Image"> | Date | string
  }

  export type ImageCollectionWhereInput = {
    AND?: ImageCollectionWhereInput | ImageCollectionWhereInput[]
    OR?: ImageCollectionWhereInput[]
    NOT?: ImageCollectionWhereInput | ImageCollectionWhereInput[]
    id?: StringFilter<"ImageCollection"> | string
    s3Key?: StringFilter<"ImageCollection"> | string
    name?: StringFilter<"ImageCollection"> | string
    description?: StringNullableFilter<"ImageCollection"> | string | null
    category?: EnumProjectTypeFilter<"ImageCollection"> | $Enums.ProjectType
    isActive?: BoolFilter<"ImageCollection"> | boolean
    sortOrder?: IntFilter<"ImageCollection"> | number
    createdAt?: DateTimeFilter<"ImageCollection"> | Date | string
    updatedAt?: DateTimeFilter<"ImageCollection"> | Date | string
  }

  export type ImageCollectionOrderByWithRelationInput = {
    id?: SortOrder
    s3Key?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrder
    isActive?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: ImageCollectionOrderByRelevanceInput
  }

  export type ImageCollectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    s3Key?: string
    AND?: ImageCollectionWhereInput | ImageCollectionWhereInput[]
    OR?: ImageCollectionWhereInput[]
    NOT?: ImageCollectionWhereInput | ImageCollectionWhereInput[]
    name?: StringFilter<"ImageCollection"> | string
    description?: StringNullableFilter<"ImageCollection"> | string | null
    category?: EnumProjectTypeFilter<"ImageCollection"> | $Enums.ProjectType
    isActive?: BoolFilter<"ImageCollection"> | boolean
    sortOrder?: IntFilter<"ImageCollection"> | number
    createdAt?: DateTimeFilter<"ImageCollection"> | Date | string
    updatedAt?: DateTimeFilter<"ImageCollection"> | Date | string
  }, "id" | "s3Key">

  export type ImageCollectionOrderByWithAggregationInput = {
    id?: SortOrder
    s3Key?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrder
    isActive?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ImageCollectionCountOrderByAggregateInput
    _avg?: ImageCollectionAvgOrderByAggregateInput
    _max?: ImageCollectionMaxOrderByAggregateInput
    _min?: ImageCollectionMinOrderByAggregateInput
    _sum?: ImageCollectionSumOrderByAggregateInput
  }

  export type ImageCollectionScalarWhereWithAggregatesInput = {
    AND?: ImageCollectionScalarWhereWithAggregatesInput | ImageCollectionScalarWhereWithAggregatesInput[]
    OR?: ImageCollectionScalarWhereWithAggregatesInput[]
    NOT?: ImageCollectionScalarWhereWithAggregatesInput | ImageCollectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ImageCollection"> | string
    s3Key?: StringWithAggregatesFilter<"ImageCollection"> | string
    name?: StringWithAggregatesFilter<"ImageCollection"> | string
    description?: StringNullableWithAggregatesFilter<"ImageCollection"> | string | null
    category?: EnumProjectTypeWithAggregatesFilter<"ImageCollection"> | $Enums.ProjectType
    isActive?: BoolWithAggregatesFilter<"ImageCollection"> | boolean
    sortOrder?: IntWithAggregatesFilter<"ImageCollection"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ImageCollection"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ImageCollection"> | Date | string
  }

  export type AuthenticatedUserCreateInput = {
    id?: string
    s3Key: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    lastLogin?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuthenticatedUserUncheckedCreateInput = {
    id?: string
    s3Key: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    lastLogin?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuthenticatedUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    s3Key?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthenticatedUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    s3Key?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthenticatedUserCreateManyInput = {
    id?: string
    s3Key: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    lastLogin?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuthenticatedUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    s3Key?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthenticatedUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    s3Key?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectTicketCreateInput = {
    id?: string
    s3Key: string
    name: string
    email: string
    phone: string
    zipCode: string
    projectType: $Enums.ProjectType
    projectStart: $Enums.ProjectStart
    projectStatus?: $Enums.ProjectStatus
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectTicketUncheckedCreateInput = {
    id?: string
    s3Key: string
    name: string
    email: string
    phone: string
    zipCode: string
    projectType: $Enums.ProjectType
    projectStart: $Enums.ProjectStart
    projectStatus?: $Enums.ProjectStatus
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectTicketUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    s3Key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    projectType?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    projectStart?: EnumProjectStartFieldUpdateOperationsInput | $Enums.ProjectStart
    projectStatus?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectTicketUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    s3Key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    projectType?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    projectStart?: EnumProjectStartFieldUpdateOperationsInput | $Enums.ProjectStart
    projectStatus?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectTicketCreateManyInput = {
    id?: string
    s3Key: string
    name: string
    email: string
    phone: string
    zipCode: string
    projectType: $Enums.ProjectType
    projectStart: $Enums.ProjectStart
    projectStatus?: $Enums.ProjectStatus
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectTicketUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    s3Key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    projectType?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    projectStart?: EnumProjectStartFieldUpdateOperationsInput | $Enums.ProjectStart
    projectStatus?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectTicketUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    s3Key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    projectType?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    projectStart?: EnumProjectStartFieldUpdateOperationsInput | $Enums.ProjectStart
    projectStatus?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CareerTicketCreateInput = {
    id?: string
    s3Key: string
    name: string
    email: string
    phone: string
    resumeUrl: string
    resumeName: string
    resumeSize: number
    resumeType?: $Enums.FileType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CareerTicketUncheckedCreateInput = {
    id?: string
    s3Key: string
    name: string
    email: string
    phone: string
    resumeUrl: string
    resumeName: string
    resumeSize: number
    resumeType?: $Enums.FileType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CareerTicketUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    s3Key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    resumeUrl?: StringFieldUpdateOperationsInput | string
    resumeName?: StringFieldUpdateOperationsInput | string
    resumeSize?: IntFieldUpdateOperationsInput | number
    resumeType?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CareerTicketUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    s3Key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    resumeUrl?: StringFieldUpdateOperationsInput | string
    resumeName?: StringFieldUpdateOperationsInput | string
    resumeSize?: IntFieldUpdateOperationsInput | number
    resumeType?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CareerTicketCreateManyInput = {
    id?: string
    s3Key: string
    name: string
    email: string
    phone: string
    resumeUrl: string
    resumeName: string
    resumeSize: number
    resumeType?: $Enums.FileType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CareerTicketUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    s3Key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    resumeUrl?: StringFieldUpdateOperationsInput | string
    resumeName?: StringFieldUpdateOperationsInput | string
    resumeSize?: IntFieldUpdateOperationsInput | number
    resumeType?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CareerTicketUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    s3Key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    resumeUrl?: StringFieldUpdateOperationsInput | string
    resumeName?: StringFieldUpdateOperationsInput | string
    resumeSize?: IntFieldUpdateOperationsInput | number
    resumeType?: EnumFileTypeFieldUpdateOperationsInput | $Enums.FileType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageCreateInput = {
    id?: string
    s3Key: string
    url: string
    filename: string
    alt?: string | null
    title?: string | null
    width?: number | null
    height?: number | null
    size?: number | null
    mimeType: string
    category: $Enums.ProjectType
    isBackdrop?: boolean
    isActive?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImageUncheckedCreateInput = {
    id?: string
    s3Key: string
    url: string
    filename: string
    alt?: string | null
    title?: string | null
    width?: number | null
    height?: number | null
    size?: number | null
    mimeType: string
    category: $Enums.ProjectType
    isBackdrop?: boolean
    isActive?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    s3Key?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    mimeType?: StringFieldUpdateOperationsInput | string
    category?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    isBackdrop?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    s3Key?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    mimeType?: StringFieldUpdateOperationsInput | string
    category?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    isBackdrop?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageCreateManyInput = {
    id?: string
    s3Key: string
    url: string
    filename: string
    alt?: string | null
    title?: string | null
    width?: number | null
    height?: number | null
    size?: number | null
    mimeType: string
    category: $Enums.ProjectType
    isBackdrop?: boolean
    isActive?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    s3Key?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    mimeType?: StringFieldUpdateOperationsInput | string
    category?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    isBackdrop?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    s3Key?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    mimeType?: StringFieldUpdateOperationsInput | string
    category?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    isBackdrop?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageCollectionCreateInput = {
    id?: string
    s3Key: string
    name: string
    description?: string | null
    category: $Enums.ProjectType
    isActive?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImageCollectionUncheckedCreateInput = {
    id?: string
    s3Key: string
    name: string
    description?: string | null
    category: $Enums.ProjectType
    isActive?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImageCollectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    s3Key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageCollectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    s3Key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageCollectionCreateManyInput = {
    id?: string
    s3Key: string
    name: string
    description?: string | null
    category: $Enums.ProjectType
    isActive?: boolean
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImageCollectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    s3Key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageCollectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    s3Key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AuthenticatedUserOrderByRelevanceInput = {
    fields: AuthenticatedUserOrderByRelevanceFieldEnum | AuthenticatedUserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AuthenticatedUserCountOrderByAggregateInput = {
    id?: SortOrder
    s3Key?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    lastLogin?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AuthenticatedUserMaxOrderByAggregateInput = {
    id?: SortOrder
    s3Key?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    lastLogin?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AuthenticatedUserMinOrderByAggregateInput = {
    id?: SortOrder
    s3Key?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    lastLogin?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumProjectTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectType | EnumProjectTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectType[]
    notIn?: $Enums.ProjectType[]
    not?: NestedEnumProjectTypeFilter<$PrismaModel> | $Enums.ProjectType
  }

  export type EnumProjectStartFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStart | EnumProjectStartFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStart[]
    notIn?: $Enums.ProjectStart[]
    not?: NestedEnumProjectStartFilter<$PrismaModel> | $Enums.ProjectStart
  }

  export type EnumProjectStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[]
    notIn?: $Enums.ProjectStatus[]
    not?: NestedEnumProjectStatusFilter<$PrismaModel> | $Enums.ProjectStatus
  }

  export type ProjectTicketOrderByRelevanceInput = {
    fields: ProjectTicketOrderByRelevanceFieldEnum | ProjectTicketOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProjectTicketCountOrderByAggregateInput = {
    id?: SortOrder
    s3Key?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    zipCode?: SortOrder
    projectType?: SortOrder
    projectStart?: SortOrder
    projectStatus?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectTicketMaxOrderByAggregateInput = {
    id?: SortOrder
    s3Key?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    zipCode?: SortOrder
    projectType?: SortOrder
    projectStart?: SortOrder
    projectStatus?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectTicketMinOrderByAggregateInput = {
    id?: SortOrder
    s3Key?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    zipCode?: SortOrder
    projectType?: SortOrder
    projectStart?: SortOrder
    projectStatus?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumProjectTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectType | EnumProjectTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectType[]
    notIn?: $Enums.ProjectType[]
    not?: NestedEnumProjectTypeWithAggregatesFilter<$PrismaModel> | $Enums.ProjectType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectTypeFilter<$PrismaModel>
    _max?: NestedEnumProjectTypeFilter<$PrismaModel>
  }

  export type EnumProjectStartWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStart | EnumProjectStartFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStart[]
    notIn?: $Enums.ProjectStart[]
    not?: NestedEnumProjectStartWithAggregatesFilter<$PrismaModel> | $Enums.ProjectStart
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectStartFilter<$PrismaModel>
    _max?: NestedEnumProjectStartFilter<$PrismaModel>
  }

  export type EnumProjectStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[]
    notIn?: $Enums.ProjectStatus[]
    not?: NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProjectStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectStatusFilter<$PrismaModel>
    _max?: NestedEnumProjectStatusFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumFileTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FileType | EnumFileTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FileType[]
    notIn?: $Enums.FileType[]
    not?: NestedEnumFileTypeFilter<$PrismaModel> | $Enums.FileType
  }

  export type CareerTicketOrderByRelevanceInput = {
    fields: CareerTicketOrderByRelevanceFieldEnum | CareerTicketOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CareerTicketCountOrderByAggregateInput = {
    id?: SortOrder
    s3Key?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    resumeUrl?: SortOrder
    resumeName?: SortOrder
    resumeSize?: SortOrder
    resumeType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CareerTicketAvgOrderByAggregateInput = {
    resumeSize?: SortOrder
  }

  export type CareerTicketMaxOrderByAggregateInput = {
    id?: SortOrder
    s3Key?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    resumeUrl?: SortOrder
    resumeName?: SortOrder
    resumeSize?: SortOrder
    resumeType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CareerTicketMinOrderByAggregateInput = {
    id?: SortOrder
    s3Key?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    resumeUrl?: SortOrder
    resumeName?: SortOrder
    resumeSize?: SortOrder
    resumeType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CareerTicketSumOrderByAggregateInput = {
    resumeSize?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumFileTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FileType | EnumFileTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FileType[]
    notIn?: $Enums.FileType[]
    not?: NestedEnumFileTypeWithAggregatesFilter<$PrismaModel> | $Enums.FileType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFileTypeFilter<$PrismaModel>
    _max?: NestedEnumFileTypeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ImageOrderByRelevanceInput = {
    fields: ImageOrderByRelevanceFieldEnum | ImageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ImageCountOrderByAggregateInput = {
    id?: SortOrder
    s3Key?: SortOrder
    url?: SortOrder
    filename?: SortOrder
    alt?: SortOrder
    title?: SortOrder
    width?: SortOrder
    height?: SortOrder
    size?: SortOrder
    mimeType?: SortOrder
    category?: SortOrder
    isBackdrop?: SortOrder
    isActive?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImageAvgOrderByAggregateInput = {
    width?: SortOrder
    height?: SortOrder
    size?: SortOrder
    sortOrder?: SortOrder
  }

  export type ImageMaxOrderByAggregateInput = {
    id?: SortOrder
    s3Key?: SortOrder
    url?: SortOrder
    filename?: SortOrder
    alt?: SortOrder
    title?: SortOrder
    width?: SortOrder
    height?: SortOrder
    size?: SortOrder
    mimeType?: SortOrder
    category?: SortOrder
    isBackdrop?: SortOrder
    isActive?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImageMinOrderByAggregateInput = {
    id?: SortOrder
    s3Key?: SortOrder
    url?: SortOrder
    filename?: SortOrder
    alt?: SortOrder
    title?: SortOrder
    width?: SortOrder
    height?: SortOrder
    size?: SortOrder
    mimeType?: SortOrder
    category?: SortOrder
    isBackdrop?: SortOrder
    isActive?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImageSumOrderByAggregateInput = {
    width?: SortOrder
    height?: SortOrder
    size?: SortOrder
    sortOrder?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ImageCollectionOrderByRelevanceInput = {
    fields: ImageCollectionOrderByRelevanceFieldEnum | ImageCollectionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ImageCollectionCountOrderByAggregateInput = {
    id?: SortOrder
    s3Key?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    isActive?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImageCollectionAvgOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type ImageCollectionMaxOrderByAggregateInput = {
    id?: SortOrder
    s3Key?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    isActive?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImageCollectionMinOrderByAggregateInput = {
    id?: SortOrder
    s3Key?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    isActive?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImageCollectionSumOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumProjectTypeFieldUpdateOperationsInput = {
    set?: $Enums.ProjectType
  }

  export type EnumProjectStartFieldUpdateOperationsInput = {
    set?: $Enums.ProjectStart
  }

  export type EnumProjectStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProjectStatus
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumFileTypeFieldUpdateOperationsInput = {
    set?: $Enums.FileType
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumProjectTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectType | EnumProjectTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectType[]
    notIn?: $Enums.ProjectType[]
    not?: NestedEnumProjectTypeFilter<$PrismaModel> | $Enums.ProjectType
  }

  export type NestedEnumProjectStartFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStart | EnumProjectStartFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStart[]
    notIn?: $Enums.ProjectStart[]
    not?: NestedEnumProjectStartFilter<$PrismaModel> | $Enums.ProjectStart
  }

  export type NestedEnumProjectStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[]
    notIn?: $Enums.ProjectStatus[]
    not?: NestedEnumProjectStatusFilter<$PrismaModel> | $Enums.ProjectStatus
  }

  export type NestedEnumProjectTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectType | EnumProjectTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectType[]
    notIn?: $Enums.ProjectType[]
    not?: NestedEnumProjectTypeWithAggregatesFilter<$PrismaModel> | $Enums.ProjectType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectTypeFilter<$PrismaModel>
    _max?: NestedEnumProjectTypeFilter<$PrismaModel>
  }

  export type NestedEnumProjectStartWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStart | EnumProjectStartFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStart[]
    notIn?: $Enums.ProjectStart[]
    not?: NestedEnumProjectStartWithAggregatesFilter<$PrismaModel> | $Enums.ProjectStart
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectStartFilter<$PrismaModel>
    _max?: NestedEnumProjectStartFilter<$PrismaModel>
  }

  export type NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[]
    notIn?: $Enums.ProjectStatus[]
    not?: NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProjectStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectStatusFilter<$PrismaModel>
    _max?: NestedEnumProjectStatusFilter<$PrismaModel>
  }

  export type NestedEnumFileTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FileType | EnumFileTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FileType[]
    notIn?: $Enums.FileType[]
    not?: NestedEnumFileTypeFilter<$PrismaModel> | $Enums.FileType
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumFileTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FileType | EnumFileTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FileType[]
    notIn?: $Enums.FileType[]
    not?: NestedEnumFileTypeWithAggregatesFilter<$PrismaModel> | $Enums.FileType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFileTypeFilter<$PrismaModel>
    _max?: NestedEnumFileTypeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}