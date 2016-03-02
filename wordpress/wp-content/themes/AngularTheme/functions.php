<?php

class wp_ng_theme {
	
	function enqueue_scripts() {
		
		wp_enqueue_style( 'bootstrapCSS', 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css', array(), '1.0', 'all' );
		wp_enqueue_script( 'angular-core', 'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular.min.js', array( 'jquery' ), '1.0', false );
		wp_enqueue_script( 'angular-resource', get_template_directory_uri().'/assets/js/angular-resource.js', array('angular-core'), '1.0', false);
		wp_enqueue_script( 'angular-router', '//ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular-route.js', array( 'angular-core' ), '1.0', false );
		wp_enqueue_script( 'ngScripts', get_template_directory_uri() . '/assets/js/angular-theme.js', array( 'ui-router' ), '1.0', false );
		wp_localize_script( 'ngScripts', 'appInfo',
			array(
				
				'api_url'			 => rest_get_url_prefix() . '/wp/v2/',
				'template_directory' => get_template_directory_uri() . '/',
				'nonce'				 => wp_create_nonce( 'wp_rest' ),
				'is_admin'			 => current_user_can('administrator')
				
			)
		);
		
	}
	
}

$ngTheme = new wp_ng_theme();
add_action( 'wp_enqueue_scripts', array( $ngTheme, 'enqueue_scripts' ) );

?>