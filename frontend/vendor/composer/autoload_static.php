<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitcd602826d735d704520a6a6e40825b06
{
    public static $prefixLengthsPsr4 = array (
        'U' => 
        array (
            'User\\Frontend\\' => 14,
        ),
        'F' => 
        array (
            'Firebase\\JWT\\' => 13,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'User\\Frontend\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
        'Firebase\\JWT\\' => 
        array (
            0 => __DIR__ . '/..' . '/firebase/php-jwt/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitcd602826d735d704520a6a6e40825b06::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitcd602826d735d704520a6a6e40825b06::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitcd602826d735d704520a6a6e40825b06::$classMap;

        }, null, ClassLoader::class);
    }
}
