<?php
/**
 * Yii Application Config
 *
 * Edit this file at your own risk!
 *
 * The array returned by this file will get merged with
 * vendor/craftcms/cms/src/config/app.php and app.[web|console].php, when
 * Craft's bootstrap script is defining the configuration for the entire
 * application.
 *
 * You can define custom modules and system components, and even override the
 * built-in system components.
 *
 * If you want to modify the application config for *only* web requests or
 * *only* console requests, create an app.web.php or app.console.php file in
 * your config/ folder, alongside this one.
 */

use craft\helpers\App;
use craft\helpers\MailerHelper;
use craft\mail\transportadapters\Smtp;

return [
    'id' => App::env('CRAFT_APP_ID') ?: 'CraftCMS',
    'modules' => [
        'my-module' => \modules\Module::class,
    ],
    'components' => [
        'deprecator' => [
          // Throw exceptions on deprecation warnings
          'throwExceptions' => App::parseBooleanEnv('HARD_MODE') ?? false,
        ],
        /**
         * Use MailHog / MailTrap in dev / client testing
         */
        'mailer' => function() {
            // Get the default component config:
            $config = App::mailerConfig();

            // Use Mailpit in dev mode:
            if (Craft::$app->getConfig()->getGeneral()->devMode) {
                $adapter = craft\helpers\MailerHelper::createTransportAdapter(
                    craft\mail\transportadapters\Smtp::class,
                    [
                        'host' => App::env('MAIL_HOST'),
                        'port' => App::env('MAIL_PORT'),
                    ]
                );

                // Override the transport:
                $config['transport'] = $adapter->defineTransport();
            }

            // Return the initialized component:
            return Craft::createObject($config);
        },
      ],
    //'bootstrap' => ['my-module'],
];
