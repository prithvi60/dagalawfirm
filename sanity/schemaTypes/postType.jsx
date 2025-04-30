import { defineField, defineType } from "sanity";

export const postType = defineType({
    name: "post",
    title: "Post",
    type: "document",
    fields: [
        defineField({
            name: "title",
            type: "string",
            title: "Title",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "slug",
            type: "slug",
            title: "Slug",
            description: "This will be auto-generated from the title",
            validation: (Rule) => Rule.required(),
            options: {
                source: "title",
                maxLength: 96,
                slugify: (input) =>
                    input
                        .toLowerCase()
                        // Replace special characters with hyphens
                        .replace(/[,\s().:']/g, '-')
                        // Remove all non-word characters except hyphens
                        .replace(/[^\w-]+/g, '')
                        // Replace multiple hyphens with single hyphen
                        .replace(/--+/g, '-')
                        // Trim hyphens from start and end
                        .replace(/^-+/, '')
                        .replace(/-+$/, '')
            },
        }),
        defineField({
            name: "blogShortRead",
            type: "text",
            title: "Blog Short Read",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "publishedAt",
            type: "datetime",
            initialValue: () => new Date().toISOString(),
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "image",
            type: "image",
            title: "Blog Post Image",
            fields: [
                {
                    type: "text",
                    name: "alt",
                    title: "ALT",
                    validation: (Rule) => Rule.required(),
                },
                {
                    type: "number",
                    name: "width",
                    title: "Width",
                    description: "Width of the image in pixels",
                    validation: (Rule) => Rule.min(1).integer(),
                },
                {
                    type: "number",
                    name: "height",
                    title: "Height",
                    description: "Height of the image in pixels",
                    validation: (Rule) => Rule.min(1).integer(),
                },
            ],
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: "body",
            type: "array",
            title: "Content",
            of: [
                { type: "block" },
                {
                    type: "image",
                    fields: [
                        { type: "text", name: "alt", title: "ALT" },
                        {
                            type: "number",
                            name: "width",
                            title: "Width",
                            validation: (Rule) => Rule.min(1).integer(),
                        },
                        {
                            type: "number",
                            name: "height",
                            title: "Height",
                            validation: (Rule) => Rule.min(1).integer(),
                        },
                    ],
                    options: {
                        hotspot: true,
                    },
                },
            ],
        }),
    ],
});
