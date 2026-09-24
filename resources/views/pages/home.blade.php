@extends('layouts.app')

@section('title', 'Inicio')

@section('content')
    <section class="hero">
        <div class="hero-copy">
            <p class="eyebrow">Producto local · Cosecha de temporada</p>
            <h1>Del campo de aquí, a tu mesa</h1>
            <p>
                En La Huerta de Barrio reunimos frutas y verduras de temporada
                cultivadas por agricultores cercanos. Productos frescos, con origen
                conocido y listos para disfrutar.
            </p>
            <a class="button-link" href="{{ route('products') }}">Ver productos</a>
        </div>

        <img
            class="hero-image"
            src="{{ asset('img/hero-huerta.jpg') }}"
            alt="Cesta con verduras frescas recién cosechadas"
        >
    </section>

    <section class="promise-section" aria-labelledby="local-food-title">
        <h2 id="local-food-title">Comprar cerca también cambia las cosas</h2>
        <p>
            Al elegir productos de temporada apoyamos a los agricultores de la zona
            y disfrutamos de alimentos recogidos en su mejor momento.
        </p>
        <a href="{{ route('project') }}">Conoce cómo trabajamos</a>
    </section>
@endsection