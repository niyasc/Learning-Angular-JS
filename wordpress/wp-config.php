<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wordpress');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '+mTA:3/DG7o3| l;5!&DKjvLv8LriFZ-j3lF#l]=+}ZIyk-W%x-${CY$@:l@+||$');
define('SECURE_AUTH_KEY',  '8Vm->rPM|-C^QT!QroR<X3^ba&NBgjf`Ed6C8Tza[X68VuC|@~KlN&gQp}%=5K-q');
define('LOGGED_IN_KEY',    '!c|aZ,8UxO]`-p.-Qdypt*>*v;@mgDGfM!IEHlS_L^y]]hI&W,0hbO^K{2-P}Z;_');
define('NONCE_KEY',        'nrKIe629,uN3(glQc&.b0U+(7kr|PgWRk ?o_vZUo+egL8Uu=<p lwR/d.t2]mWZ');
define('AUTH_SALT',        'C9S%,s~T7nC~vNP7H@!$?Z4r*JGq(plaX(/?hR)>)]u({/T_lS<]Q)MSJf}3=KqA');
define('SECURE_AUTH_SALT', 'dRaOJd9AwmBv)v6S44-aM[Fg8i.|1K1]1$=h9p#ijDmE&JEKO<l~z+pG]3lVL3r2');
define('LOGGED_IN_SALT',   '8Dk4]!?CfmH}D{2I*b]b)t|hJL{Vli$:FS6UyGW_jlz7jCL|ak)Uf|fe8_3A(>**');
define('NONCE_SALT',       '+J@W8LktIx,EN3rp!wKp7doK_bb,[y 8WB1s:T|n(`0xKEisI@)b;*Sa9<ZYL[Jc');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
