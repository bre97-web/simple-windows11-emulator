# about the component TablePanel

The component TablePanel provides two slot and two props

## slot
- page-one
- page-two

## props
all alots provide two props:
- currentPage
- setCurrentPage

```ts
currentPage: StartPanelPage
```
```ts
setCurrentPage(e: StartPanelPage): void
```

```ts
export type StartPanelPage = "page-one" | "page-two"
```