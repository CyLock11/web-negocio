@extends('layouts.app')

@section('title', 'Productos')

@section('content')
    <h1>Productos de temporada</h1>
    <p>
        Nuestra selección cambia según lo que está listo para cosechar.
        Estos son algunos de los productos que puedes encontrar en la huerta.
    </p>

    <p>
        Para saber qué frutas y verduras suelen estar de temporada,
        consulta el
        <a
            href="https://www.ocu.org/alimentacion/alimentos/calculadora/calendario-de-frutas-y-verduras/calendario-de-frutas"
            target="_blank"
            rel="noopener noreferrer"
        >calendario orientativo de la OCU</a>.
    </p>

    <section class="featured-section" aria-labelledby="products-title">
        <div class="section-heading">
            <div>
                <p class="eyebrow">Selección local</p>
                <h2 id="products-title">Del campo a tu mesa</h2>
            </div>

            <div class="carousel-controls">
                <button
                    type="button"
                    data-carousel-prev
                    aria-label="Ver productos anteriores"
                >&lsaquo;</button>
                <button
                    type="button"
                    data-carousel-next
                    aria-label="Ver más productos"
                >&rsaquo;</button>
            </div>
        </div>

        @include('partials.carousel')
    </section>
@endsection