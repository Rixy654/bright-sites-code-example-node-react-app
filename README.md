Run this command to run the application locally.

```
yarn dev
```

Alternatively you can run this command to bring the application up in the provided docker container:

```
make dev
```

The placeholder application can be browsed to on:
 
```
http://localhost:8080
```

There is a single API route accessible through the following request:

```
curl -X POST http://localhost:8080/v1/national-insurance -H 'Content-Type: application/json' -d '{"income": 1234}'
```

To run tests and line:

```
yarn ci
```

---

### _Additional Information_

This code test was written on macOS but will run natively on Linux and Windows 10 as well as in the provided devcontainer. The code test requires Node.js 14.x (which is in LTS) and we advocate using a node version management tool such as [n](https://github.com/tj/n) to help in managing your node versions.

**Windows Users**

When running on Windows 10 our preference was to follow [this guide](https://www.windowscentral.com/how-install-bash-shell-command-line-windows-10) to using Windows Subsystem for Linux and installing Bash through the Ubuntu distro in the Windows Store.

**Linux Users**

Users of Ubuntu should be aware that in some versions of the distro there are extra hurdles around the aliasing of the `yarn` command by the `cmdtest` library and the use of `nodejs` rather than `node`, [this page](https://yarnpkg.com/lang/en/docs/install/#debian-stable) provides details on rectifying these problems.

**Remote Containers**

If you're using VS Code and Docker, and have the [Remote - Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) VS Code extensions installed the project can be opened in a container.

More information about developing in a container can be found in the [VS Code documentation](https://code.visualstudio.com/docs/remote/containers#_quick-start-open-an-existing-folder-in-a-container).

If you would like to attempt the test in your browser and are part of the beta, this project is also configured to run in GitHub [Codespaces](https://github.com/features/codespaces). Please be aware GitHub may charge for use of this service.

More information about GitHub codespaces can be found in the [GitHub documentation](https://docs.github.com/en/github/developing-online-with-codespaces).
