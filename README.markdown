1. Install: yarn install
2. Generate routes: yarn run tsoa routes
3. Launch app: yarn run ts-node app/server.ts
4. In other shell:

```sh
curl http://localhost:3000/alerts/\?alertTags\=foobar
# it returns
[]
# it should returns: (I manually patched
# node_modules/@tsoa/runtime/dist/routeGeneration/templateHelpers.js to add `case
# 'refEnum'`)
{"fields":{"alertTags.$0":{"message":"should be one of the following; ['foo','bar']","value":"foobar"}}}
```
