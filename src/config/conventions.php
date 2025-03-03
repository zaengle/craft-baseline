<?php
/**
 * Conventions plugin for Craft CMS 4.x
 *
 * Craft Conventions
 *
 * @link      https://zaengle.com/
 * @see      https://craft-conventions.zaengle.com/
 * @copyright Copyright (c) 2022 Zaengle Corp
 */

use craft\helpers\App;

return [

    'patterns' => [
        // <PatternTypeHandle> => <TemplateSubDir>
        'partial' => '_partials',
        'field' => '_fields',
        'component' => '_components',
    ],
    /**
     * Default
     *
     * These settings apply to all PatternTypes defined above
     */
    'defaults' => [
        'params' => [
            // Named params that *will be created if omitted*  in the ctx passed to the pattern template
            'ensure' => [
                'data' => [],
                'opts' => [],
            ],
            // Named params that *must* be set in the ctx passed to the pattern template,
            // or an error is thrown (in devMode)
            'require' => [],
            // Named params that *must not* be set in the ctx passed to the pattern template,
            // or an error is thrown (in devMode)
            'reject' => [],
        ],
//        Output debug comments with paths when a pattern is rendered
        'outputComments' => App::devMode(),
    ],
];
