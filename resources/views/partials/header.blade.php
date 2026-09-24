<header>
    <div class="header-row">
        <div class="brand-group">
            <a class="brand-link" href="{{ route('home') }}">La Huerta de Barrio</a>

            <button
                type="button"
                id="theme-toggle"
                class="theme-toggle"
                aria-label="Cambiar a tema oscuro"
                aria-pressed="false"
            >
                <i class="theme-icon theme-icon-moon" aria-hidden="true"></i>
                <i class="theme-icon theme-icon-sun" aria-hidden="true"></i>
            </button>
        </div>

        <button
            type="button"
            id="menu-toggle"
            class="menu-toggle"
            aria-label="Abrir menú"
            aria-expanded="false"
            aria-controls="primary-navigation"
        >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </button>
    </div>

    <nav id="primary-navigation" aria-label="Navegación principal">
        <a href="{{ route('home') }}">Inicio</a>
        <a href="{{ route('products') }}">Productos</a>
        <a href="{{ route('project') }}">El Proyecto</a>
    </nav>
</header>