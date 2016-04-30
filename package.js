
Package.describe({
    name: 'lucendio:loq-enabled',
    summary: 'isomorphic logging, that prevents untended data leaking without code changes',
    version: '0.0.1',
    git: 'https://github.com/lucendio/meteor_loq-enabled',
    documentation: 'README.md'
});




Package.onUse( function( api ){

    api.versionsFrom( '1.3' );


    api.use( [
        'ecmascript',
        'modules'
    ], [ 'server', 'client' ] ); //shared


    api.use( [], 'client' );


    api.use( [], 'server' );



    api.export( [], [ 'server', 'client' ] );  //shared


    api.export( [], 'client' );


    api.export( [], 'server' );



    api.imply( [

    ], [ 'server', 'client' ] );


    api.imply( [], 'client' );


    api.imply( [], 'server' );



    api.mainModule( 'main.js', [ 'server', 'client' ] );



    api.addFiles( [], [ 'server', 'client' ] );


    api.addFiles( [], 'client' );


    api.addFiles( [], 'server' );

});




Package.onTest( function( api ){

});
