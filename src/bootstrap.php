<?php
/**
 * Shared bootstrap file
 */

// Define path constants
define('CRAFT_BASE_PATH', __DIR__);
define('CRAFT_DOTENV_PATH', dirname(CRAFT_BASE_PATH, 1));
define('CRAFT_VENDOR_PATH', CRAFT_BASE_PATH.'/vendor');

// Load Composer's autoloader
require_once CRAFT_VENDOR_PATH . '/autoload.php';

if (class_exists(Dotenv\Dotenv::class) && file_exists(CRAFT_DOTENV_PATH . '/.env')) {
    // By default, this will allow .env file values to override environment variables
    // with matching names. Use `createUnsafeImmutable` to disable this.
    Dotenv\Dotenv::createUnsafeMutable(CRAFT_DOTENV_PATH)->safeLoad();
}
