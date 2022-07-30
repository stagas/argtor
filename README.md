<h1>
argtor <a href="https://npmjs.org/package/argtor"><img src="https://img.shields.io/badge/npm-v1.0.3-F00.svg?colorA=000"/></a> <a href="src"><img src="https://img.shields.io/badge/loc-22-FFF.svg?colorA=000"/></a> <a href="https://cdn.jsdelivr.net/npm/argtor@1.0.3/dist/argtor.min.js"><img src="https://img.shields.io/badge/brotli-265b-333.svg?colorA=000"/></a> <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-F0B.svg?colorA=000"/></a>
</h1>

<p></p>

Extracts destructured argument names from a function.

<h4>
<table><tr><td title="Triple click to select and copy paste">
<code>npm i argtor </code>
</td><td title="Triple click to select and copy paste">
<code>pnpm add argtor </code>
</td><td title="Triple click to select and copy paste">
<code>yarn add argtor</code>
</td></tr></table>
</h4>

## API

<p>  <details id="argtor$1" title="Function" open><summary><span><a href="#argtor$1">#</a></span>  <code><strong>argtor</strong></code><em>(fn, keys)</em>     &ndash; Extract destructured argument names from <code>fn</code>'s first argument and return a <code>Set</code> of <code>keys</code>.</summary>  <a href="src/argtor.ts#L31">src/argtor.ts#L31</a>  <ul>    <p>  <p>

```ts
const fn = ({ foo, bar }) => void 0
argtor(fn) // => Set(2) {'foo', 'bar'}
```

</p>
  <details id="fn$3" title="Function" ><summary><span><a href="#fn$3">#</a></span>  <code><strong>fn</strong></code><em>(state)</em>    </summary>    <ul>    <p>    <details id="state$6" title="Parameter" ><summary><span><a href="#state$6">#</a></span>  <code><strong>state</strong></code>    </summary>    <ul><p>any</p>        </ul></details>  <p><strong>fn</strong><em>(state)</em>  &nbsp;=&gt;  <ul>any</ul></p></p>    </ul></details><details id="keys$7" title="Parameter" ><summary><span><a href="#keys$7">#</a></span>  <code><strong>keys</strong></code>  <span><span>&nbsp;=&nbsp;</span>  <code>...</code></span>   &ndash; A keys <code>Set</code> to fill in with the argument names.</summary>    <ul><p><span>Set</span>&lt;string&gt;</p>        </ul></details>  <p><strong>argtor</strong><em>(fn, keys)</em>  &nbsp;=&gt;  <ul><span>Set</span>&lt;string&gt;</ul></p></p>    </ul></details></p>

## Credits

- [everyday-types](https://npmjs.org/package/everyday-types) by [stagas](https://github.com/stagas) &ndash; Everyday utility types

## Contributing

[Fork](https://github.com/stagas/argtor/fork) or [edit](https://github.dev/stagas/argtor) and submit a PR.

All contributions are welcome!

## License

<a href="LICENSE">MIT</a> &copy; 2022 [stagas](https://github.com/stagas)
