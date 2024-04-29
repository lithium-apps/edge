<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/lithium_apps/edge">
    <img src=".github/assets/lithium_logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">@lithium/edge</h3>

  <p align="center">
    A NestJS module to use Edge.JS templating language.
    <br />
    <br />
    <a href="https://github.com/lithium-apps/edge/issues/new?labels=enhancement">Request Feature</a>
    ·
    <a href="https://github.com/lithium-apps/edge/issues/new?labels=bug">Report Bug</a>
    ·
    <a href="https://github.com/lithium-apps/edge/issues/new?labels=enhancement">Request Modification</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#install-the-package">Install the package</a>
    </li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About the project

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

-   [![TypeScript][TypeScript]][TypeScript-url]
-   [![NestJS][NestJS]][NestJS-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USING PACKAGES -->

## Install the package

Components are organized in packages. Each package is a collection of components that are related to precise use case (Mobile or Web).
Packages are published to GitHub registry and can be installed in any project.

1.  You need to create a `.npmrc` file at the root of your project with the following content:

    ```sh
    @lithium-apps:registry=https://npm.pkg.github.com
    ```

2.  For the login process you need to set a personal access token with the `read:packages` scope.
    Then you can login to the GitHub registry with the following command:
    ```sh
    pnpm login --registry=https://npm.pkg.github.com --scope=@lithium-apps
    ```

   3. You can now install the packages using the following command:
       ```sh
       pnpm install @lithium-apps/edge
       ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

-   Kylian Mallet - [@Kylian-Mallet](https://github.com/Kylian-Mallet) - [kylian.mallet@sklav.group](mailto:kylian.mallet@sklav.group)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/lithium-apps/edge.svg?style=for-the-badge
[contributors-url]: https://github.com/lithium-apps/edge/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/lithium-apps/edge.svg?style=for-the-badge
[forks-url]: https://github.com/lithium-apps/edge/network/members
[stars-shield]: https://img.shields.io/github/stars/lithium-apps/edge.svg?style=for-the-badge
[stars-url]: https://github.com/lithium-apps/edge/stargazers
[issues-shield]: https://img.shields.io/github/issues/lithium-apps/edge.svg?style=for-the-badge
[issues-url]: https://github.com/lithium-apps/edge/issues
[license-shield]: https://img.shields.io/github/license/lithium-apps/edge.svg?style=for-the-badge
[license-url]: https://github.com/lithium-apps/edge/blob/master/LICENSE.txt

[NestJS]: https://img.shields.io/badge/NestJS-E0234E?logo=nestjs&logoColor=fff&style=for-the-badge
[NestJS-url]: https://nestjs.com/
[TypeScript]: https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/