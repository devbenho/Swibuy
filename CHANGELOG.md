# [6.0.2](https://github.com/mikro-orm/nestjs/compare/v6.0.1...v6.0.2) (2024-06-04)

### Bug Fixes

* allow dev versions of `@mikro-orm/core` ([685d7e7](https://github.com/mikro-orm/nestjs/commit/685d7e7))
* register `MongoMikroORM` provider even if we fail to infer driver from config and there is mongo installed ([7e73205](https://github.com/mikro-orm/nestjs/commit/7e73205))


# [6.0.1](https://github.com/mikro-orm/nestjs/compare/v6.0.0...v6.0.1) (2024-05-19)

### Bug Fixes

* reuse single `MikroORM` instance ([3656eaf](https://github.com/mikro-orm/nestjs/commit/3656eaf))
* improve support for driver specific imports ([a71c354](https://github.com/mikro-orm/nestjs/commit/a71c354))


# [6.0.0](https://github.com/mikro-orm/nestjs/compare/v5.2.3...v6.0.0) (2024-05-19)

### Features

* support MikroORM v6 ([#153](https://github.com/mikro-orm/nestjs/issues/153)) ([a3ad8d6](https://github.com/mikro-orm/nestjs/commit/a3ad8d6))
* register driver specific MikroORM provider ([#176](https://github.com/mikro-orm/nestjs/issues/176)) ([d65b268](https://github.com/mikro-orm/nestjs/commit/d65b268))

### Bug Fixes

* await `useFactory` resolution when registering MikroORM with `forRootAsync` ([#166](https://github.com/mikro-orm/nestjs/issues/166)) ([ae637bd](https://github.com/mikro-orm/nestjs/commit/ae637bd))

### BREAKING CHANGES

- MikroORM v6 and Nest v10 required
- Node 18.12+ and TS 5.0+ required
- https://mikro-orm.io/docs/upgrading-v5-to-v6


# [5.2.3](https://github.com/mikro-orm/nestjs/compare/v5.2.2...v5.2.3) (2023-08-23)

### Features

* defer automatic `clear` call on `autoLoadEntities` cache done on shutdown ([8b670eb](https://github.com/mikro-orm/nestjs/commit/8b670eb))



# [5.2.2](https://github.com/mikro-orm/nestjs/compare/v5.2.1...v5.2.2) (2023-08-23)

### Features

* clear the `autoLoadEntities` cache automatically on app shutdown ([#4733](https://github.com/mikro-orm/mikro-orm/discussions/4733)) ([aca7c01](https://github.com/mikro-orm/nestjs/commit/aca7c01a53cde125d9e3a34f412ea428b6521a7e))



# [5.2.1](https://github.com/mikro-orm/nestjs/compare/v5.2.0...v5.2.1) (2023-08-16)


### Bug Fixes

* fix weird bugs when `vitest` is used with `autoLoadEntities` ([cd7767a](https://github.com/mikro-orm/nestjs/commit/cd7767aafb6d243c0dfed796c8870302d989f38f)), closes [#134](https://github.com/mikro-orm/nestjs/issues/134)


### Features

* add clear storage method ([#133](https://github.com/mikro-orm/nestjs/issues/133)) ([41ba27b](https://github.com/mikro-orm/nestjs/commit/41ba27b34be069795337a3c2bc73fc9fa45c8b3f))



# 5.2.0 (2023-06-24)

* support NestJS 10


# 5.1.8 (2023-03-29)

* support TS 5


# 5.1.7 (2023-02-12)

* support custom repositories in v6
* export `MikroORMs` provider (#88)



# 5.1.6 (2023-01-09)

* tries to fix issue with async `useFactory` 
* tries to fix issue with `autoLoadEntities` and repeatable `init/close` calls



# 5.1.5 (2022-12-19)

* fixes some edge cases after the fix from 5.1.3 



# 5.1.4 (2022-12-19)

* removes yarn v3 constraint from package.json `engines` 



# 5.1.3 (2022-12-18)

* this version uses different mechanism for registering the EntityManager flavours (e.g. `SqlEntityManager`), which should also help with pnpm dependency resolution issues 



# 5.1.2 (2022-09-13)

* this version adds all ORM packages as optional peer dependencies, which might help with PNPM dependency resolution ([#81](https://github.com/mikro-orm/nestjs/issues/81))



# 5.1.1 (2022-08-14)

### Bug Fixes

* make the `forFeature` type more loose and accept any `EntitySchema` ([c0012c9](https://github.com/mikro-orm/nestjs/commit/c0012c9))
* return same EM fork for EM from core and driver packages ([#82](https://github.com/mikro-orm/nestjs/pull/82)) ([d6789f6](https://github.com/mikro-orm/nestjs/commit/d6789f6))



# 5.1.0 (2022-07-08)

### Features

* add support for nestjs@9.0.0 ([#80](https://github.com/mikro-orm/nestjs/issues/80)) ([f571181](https://github.com/mikro-orm/nestjs/commit/f571181ef1ee6a08ed7a9cf410a48111fac7d9ee))



## 5.0.2 (2022-05-09)


### Bug Fixes

* ensure correct application shutdown with forRootAsync and multiple databases ([#75](https://github.com/mikro-orm/nestjs/issues/75)) ([91b6faf](https://github.com/mikro-orm/nestjs/commit/91b6faf))
* ensure correct `contextName` in `forRootAsync` ([#74](https://github.com/mikro-orm/nestjs/issues/74)) ([4609e5d](https://github.com/mikro-orm/nestjs/commit/4609e5d))


## 5.0.1 (2022-03-11)


### Bug Fixes

* multiple database connection with `autoLoadEntities` ([#62](https://github.com/mikro-orm/nestjs/issues/62)) ([7dfc097](https://github.com/mikro-orm/nestjs/commit/7dfc0975523c1abe33bd6302237f1719e12fe4d5))


# [5.0.0](https://github.com/mikro-orm/nestjs/compare/v4.3.0...v5.0.0) (2022-02-20)


### Bug Fixes

* use constant imports for webpack bundling ([47f56ff](https://github.com/mikro-orm/nestjs/commit/47f56ff7ee6c8f784ffe7f32ae302d2c89f9ae11)), closes [#57](https://github.com/mikro-orm/nestjs/issues/57)


### Features

* support multiple database connections ([#56](https://github.com/mikro-orm/nestjs/issues/56)) ([df4725b](https://github.com/mikro-orm/nestjs/commit/df4725bd8e0ba70c86e8e597bfd6bb67ca4df36b))
* return value from UseRequestContext callback ([#28](https://github.com/mikro-orm/nestjs/issues/28)) ([4bf5b0f](https://github.com/mikro-orm/nestjs/commit/4bf5b0f8d16653a756b474315a92609c0bd7b632))


### BREAKING CHANGES

- MikroORM v5 and Nest v8 required
- `@UseRequestContext` decorator is now moved to the `core` package
- Node 14+ and TS 4.1+ required
- https://mikro-orm.io/docs/upgrading-v4-to-v5


# [4.3.0](https://github.com/mikro-orm/nestjs/compare/v4.2.0...v4.3.0) (2021-08-19)


### Features

* add support for nestjs@8.0.0 ([#29](https://github.com/mikro-orm/nestjs/issues/29)) ([e512067](https://github.com/mikro-orm/nestjs/commit/e51206762f9eb3e96bfc9edbb6abbf7ae8bc08a8))



# [4.2.0](https://github.com/mikro-orm/nestjs/compare/v4.1.0...v4.2.0) (2020-09-25)

### Features

* **core:** allow setting a custom scope for the EntityManager provider ([#9](https://github.com/mikro-orm/nestjs/issues/9)) ([c11e0ea](https://github.com/mikro-orm/nestjs/commit/c11e0ea)), closes [#2](https://github.com/mikro-orm/nestjs/issues/2)


# [4.1.0](https://github.com/mikro-orm/nestjs/compare/v4.0.0...v4.1.0) (2020-09-23)

### Features

* **core:** add `@UseRequestContext()` decorator ([7aeac9d](https://github.com/mikro-orm/nestjs/commit/7aeac9d)), closes [#5](https://github.com/mikro-orm/nestjs/issues/5)
* **core:** add `autoLoadEntities` option ([ceaf16e](https://github.com/mikro-orm/nestjs/commit/ceaf16e)), closes [#8](https://github.com/mikro-orm/nestjs/issues/8)


# [4.0.0](https://github.com/mikro-orm/nestjs/compare/v1.0.2...v4.0.0) (2020-09-08)

### Features

* support for MikroORM 4
* call `orm.close()` on app shutdown ([63a5c3f](https://github.com/mikro-orm/nestjs/commit/63a5c3f))
* support fastify ([5365e26](https://github.com/mikro-orm/nestjs/commit/5365e26))
* support `forRoot()` without options ([dfbfbcf](https://github.com/mikro-orm/nestjs/commit/dfbfbcf))
