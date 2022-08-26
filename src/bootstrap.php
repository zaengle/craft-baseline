<?php
/**
 * Shared bootstrap file
 */

// Define path constants
define('CRAFT_BASE_PATH', __DIR__);
define('DOTENV_PATH', dirname(CRAFT_BASE_PATH, 1));
define('CRAFT_COMPOSER_PATH', dirname(CRAFT_BASE_PATH, 1) . '/composer.json');
define('CRAFT_VENDOR_PATH', dirname(CRAFT_BASE_PATH, 1) . '/vendor');

// Load Composer's autoloader
require_once CRAFT_VENDOR_PATH . '/autoload.php';

if (class_exists(Dotenv\Dotenv::class) && file_exists(DOTENV_PATH . '/.env')) {
    // By default, this will allow .env file values to override environment variables
    // with matching names. Use `createUnsafeImmutable` to disable this.
    Dotenv\Dotenv::createUnsafeMutable(DOTENV_PATH)->safeLoad();
}
