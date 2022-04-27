# gencode-form

Source code of form generation by json.

### 数据定义

https://json-schema.org/understanding-json-schema/reference/type.html

### 通用定义

```TypeScript
interface ISchemaValidator {}

type XSchemaProps = Record<string, any>;

type SchemaType =
    | "string"
    | "number"
    | "boolean"
    | "null"
    | "object"
    | "array";

// schema 字段描述
interface ISchema {
    type: SchemaType;
    title: string;
    required?: boolean;
    "x-decorator?": string;
    "x-component": string;
    "x-component-props"?: XSchemaProps;
    "x-validator"?: ISchemaValidator[];
    description?: string;
}

```

#### Input

eg:
**schema 数据**

```TypeScript
title: {
    type: "string",
    title: "这是一个标题",
    "x-component": "Input";
    "x-decorator": "FlexItem",
    "x-component-props": {
        value: "title",
        placeholder: "请输入标题"
    }
}
```

**template**

```html
<FlexItem>
    <div>这是一个标题</div>
    <input v-model="title" placeholder="请输入标题" />
</FlexItem>
```
