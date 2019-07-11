# Connect demo extension

Simple integration of Endpass Connect to the web-sites through Chrome extension.

## Building

Clone repository and install dependencies:

```shell
yarn
```

Use following command for building extension for browser usage:

```shell
yarn build
```

## Installation

When your extension will be ready you can install it to your Google Chrome (or browser with ability
to use Chrome extensions).

1. Open your browser and open "Menu > More tools > Extensions".

<p align="center">
  <a href="https://github.com/kirpichikjs/kirpichik" target="_blank">
    <img width="700"src="https://github.com/endpass/connect-extension-demo/blob/master/public/installing-tutorial-1.png?raw=true" />
  </a>
</p>

2. Enable "Developer mode" at the top of page.

3. Press "Load unpacked".

<p align="center">
  <a href="https://github.com/kirpichikjs/kirpichik" target="_blank">
    <img width="700"src="https://github.com/endpass/connect-extension-demo/blob/master/public/installing-tutorial-2.png?raw=true" />
  </a>
</p>

4. Choose `dist` folder in directory of earlier built extension.

That it, now you can use Connect extension.

<p align="center">
  <a href="https://github.com/kirpichikjs/kirpichik" target="_blank">
    <img width="700"src="https://github.com/endpass/connect-extension-demo/blob/master/public/installing-tutorial-3.png?raw=true" />
  </a>
</p>

## Advanced

## Environment configuration

You can change environment parameters for special builds. For example – for debugging purposes.

There are available parameters and their description. Change only if you are sure of what you are doing.

**infura**:

| Param | Description    |
| ----- | -------------- |
| `key` | Infura API key |

**auth**:

| Param | Description                            |
| ----- | -------------------------------------- |
| `url` | Link to the extension auth application |

## Notice

After installing extension with changed parameters it will not "work immediately".
When you will visit any site you should look at browser's toolbar for shield icon with label
"Insecure content blocked". Press it and then press "Load unsafe scripts" – after this
actions extension will work correclty. You should do that on each web-site!
