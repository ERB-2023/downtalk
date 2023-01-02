# Turborepo starter

This is an official Yarn v1 starter turborepo.

## What's inside?

이 Turborepo로 구성된 레포지토리는 [Yarn](https://classic.yarnpkg.com/)을 패키지 매니저로 사용합니다.

아래에 설명되어 있는 `apps` 또는 `packages` 폴더 내의 레포지토리를 가지고 있습니다.

### Apps and Packages

`apps`

- `front`: [Next.js](https://nextjs.org/) 앱, Front-End Repository
- `test`: 다른 [Next.js](https://nextjs.org/) 앱, 모노레포 테스트 용으로 남겨 놓음

`packages`

- `ui`: `front`와 `test`에서 사용할 수 있는 리액트 컴포넌트 라이브러리
- `eslint-config-custom`: `eslint` 설정 (`eslint-config-next`, `eslint-config-prettier` 포함)
- `tsconfig`: 모노레포에서 사용되는 `tsconfig.json` 설정

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

build 커맨드는 루트에서 다음과 같이 입력:

```
yarn run build
```

### Develop

dev 커맨드는 루트에서 다음과 같이 입력:

```
yarn run dev
```

> 루트에서 커맨드를 입력하면, apps 내의 dev/build scripts를 가진 폴더 모두 실행되는 방식. (run 생략 가능)

하나의 앱만 실행하려는 경우

```
yarn dev --scope="package-name"

$ yarn dev --scope=test
$ yarn dev --scope=front
```

--scope에는 `front` or `back` 같은 apps/packages 내 폴더 명

root에서 패키지 설치하기

```
$ yarn workspace [workspace-name] add [package-name]

$ yarn workspace front add redux-toolkit
```

workspace-name에는 `front` or `back` 같은 apps/packages 내 폴더 명
package-name에는 설치하려는 패키지 명

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Pipelines](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
