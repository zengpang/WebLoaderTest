const {getOptions}=require('loader-utils');
const { validate } = require('schema-utils');
const MarkdownIt=require('markdown-it');

const schema={
    type:'object',
    properties:{
        html:{
          type:'boolean'
        },
        xhtmlOut:{
            type:'boolean'
        },
        langPrefix: {
            type: 'string'
        },
        linkify:{
            type:'boolean'
        }
    }
}
module.exports=function(source){
    const options=getOptions(this);
     validate(schema, options);
     const md=MarkdownIt(options);
    return md.render(source);
}