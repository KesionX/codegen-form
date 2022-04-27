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
    "x-decorator?": string; // eg: FormItem
    "x-component": string;
    "x-component-props"?: XSchemaProps;
    "x-validator"?: ISchemaValidator[];
    description?: string;
}
