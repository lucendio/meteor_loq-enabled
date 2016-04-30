loq-enabled
===========


__NOTE:__ If you used the packages [lucendio:dlog](https://atmospherejs.com/lucendio/dlog), 
[lucendio:dlog-activated](https://atmospherejs.com/lucendio/dlog-activated) or
[lucendio:clog](https://atmospherejs.com/lucendio/clog) before, they are now deprecated. It is
 recommended to `loq` (and `loq-enabled`).
 
__Supported Meteor version: 1.3 (only with `modules` enabled)__
 


### What is this thing?

This *meteor* package is an additional *"security"* layer, which increase the effort to
get `loq` outputs to work in production, or in other words: to protect users against themselves.
Enabling `loq` with an additional packages, makes it possible to simply (de-)activate with a 
terminal command: `$   meteor [add,remove] lucendio:loq-enabled` 

Please note, that this package is required by and need to be installed alongside `lucendio:loq`.
It does not do anything and does not contain any logic.



### License

[FVUS](./LICENSE.md)