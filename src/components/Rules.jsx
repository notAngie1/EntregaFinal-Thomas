import useHeaderEffects from "../hooks/useHeaderEffects";

const Rules = () => {
    const { cursorX, cursorY, handleMouseMove } = useHeaderEffects();

    return (
        <div>
            <div className="header" onMouseMove={handleMouseMove}>
                <div className="header-background" style={{ transform: `translateY(-${scrollY * 0.01}px)` }} />
                <div className="header-content header-container">
                    <h1>Normativas de TekyaRP</h1>
                    <p>A continuacion van a tener las normativas generales y de las distintas agrupaciones, normativas que van a tener que cumpliar para no tener una sancion tando dentro como fuera del servidor.</p>
                </div>
                <div className="container">
                    <div id="circulo"><img src="../public/bloborganic.gif" alt="" /></div>
                    <div id="circulo2"><img src="../public/bloborganic.gif" alt="" /></div>
                    <div id="circulo3"><img src="../public/bloborganic.gif" alt="" /></div>
                    <div id="circulo4"><img src="../public/bloborganic.gif" alt="" /></div>
                </div>

                <div className="cursor"
                    style={{
                        top: `${cursorY - 100}px`,
                        left: `${cursorX + 5}px`,
                    }}><img src="../public/bloborganic.gif" alt="" /></div>
            </div>

            <section className="aboutcontainer" id="generales1">

                <div className="menulateral">
                    <ul>
                        <li><a href="#normasgenerales">Generales</a></li>
                        <li><a href="normas/normaspfa.html">PFA</a></li>
                        <li><a href="normas/normassame.htm">Same</a></li>
                        <li><a href="normas/normasmafia.html">Mafia</a></li>
                        <li><a href="normas/normasmeca.html">Mecanicos</a></li>
                    </ul>
                </div>

                <div className="about-txt" id="normasgenerales">
                    <h2>Normas Generales</h2>
                    <br /><h2>Indice</h2>
                    <p>
                        <br />1.1 — METAGAMING (MG).
                        <br /> 1.2 — POWERGAMING (PG).
                        <br />1.3 — DEATHMATCH (DM).
                        <br />1.4 — PLAYER KILL (PK).
                        <br />1.5 — CHARACTER KILL (CK).
                        <br />1.6 — REVENGE KILL (RK).
                        <br />1.7 — VEHICLE DEATHMATCH (VDM).
                        <br />1.8 — Roles agresivos desde vehículos.
                        <br />1.9 — Rol de entorno.
                        <br />1.10 — Fuera de Rol.
                        <br />1.11 — NO ROL (NRL).
                        <br />1.12 — Evasión de rol.
                        <br />1.13 — Retomar Roles.
                        <br />1.14 — Zonas.
                        <br />1.15 — Uso de Comunicaciones (Discord, TS3, etc.)
                        <br />1.16 — Abuso de Bugs.
                        <br />1.17 — Uso de Modificaciones, Cheats & Autoclickers/Macros.
                        <br />1.18 — Valorar vida.
                        <br />1.19 — Cuentas de juego y personajes.
                        <br />1.20 — Insultos Fuera de Jugador (IOOC).
                        <br />1.21 — Requisitos para Robos y Aclaraciones.
                        <br />1.22 — Rol Erotico & Rol de Humillación.
                        <br />1.23 — Sanciones Administrativas.

                        <br />
                        <br />1.1 — METAGAMING (MG): METAGAMING o MG es utilizar información OOC en situaciones IC.
                        <br />
                        <br />1.2 — POWERGAMING (PG): POWERGAMING o PG es realizar todo tipo de acciones que resultan imposibles de ser realizadas en la vida real.
                        <br />
                        <br />1.3 — DEATHMATCH (DM): DEATHMATCH o DM es el acto de atacar violentamente a un usuario sin una razón ni interacción IC que lo justifique.
                        <br />
                        <br />1.4A — Player Kill (PK): PLAYERKILL o PK es la muerte de nuestro personaje en relación con un contexto de rol importante para nuestro personaje, normalmente conlleva los ultimos 10 minutos de rol.
                        <br />
                        <br />1.4B — Player Kill Total (PKT): PLAYERKILL TOTAL o PKT es la muerte de nuestro personaje en relación con un contexto de rol completo importante para nuestro personaje que deben ser olvidados y no pueden utilizarse para la participación del mismo bajo ningún termino.
                        <br />
                        <br />1.5 — Character Kill (CK): CHARACTER KILL o CK es la muerte total y absoluta de nuestro personaje. En pocas palabr/as, comienzas desde cero sin conocimientos algunos de tu vida anterior.
                        <br />
                        <br /></p>

                    <h2>Tipos de CK:</h2>
                    <p>
                        <br />CK Voluntario: Es el CK que se realiza una persona voluntariamente, ya sea por querer empezar una nueva vida o cualquier otra razón.<br />
                        <br />CK Administrativo: Es el CK que solamente es efectuado por la administración de BA:RP, en casos muy especiales.<br />
                        <br />CK Faccionario: Es el CK que efectúa alguna facción a una persona en específico. Puede ser por una Mafia o Facción legal.<br />
                        <br />
                        <br />1.6 — Revenge Kill (RK): REVENGE KILL o RK es el acto de tomar vengza sobr/e el(los) usuario(s) que participaron en la muerte de tu personaje. El personaje asesinado no podrá volver a la zona donde ocurrió la muerte en un lapso de al menos 30 minutos, o la finalización del rol por parte de los demás usuarios implicados.
                        <br />
                        <br />1.7 — Vehicle Deathmatch (VDM): VEHICLE DEATHMATCH o VDM es la utilización de un vehículo como arma para hacer daño.
                        <br />
                        <br />1.8 — Roles agresivos desde vehículos: Se prohibe inicial roles agresivos desde un vehículo. En caso de tener un rol agresivo previo que involucre dos vehículos, no se podrá disparar a matar desde arriba de uno hacia el otro, solamente se podrán pinchar ruedas.
                        <br />
                        <br />1.9 — Rol de entorno (RDE): ROL DE ENTORNO o RDE es aquellas zonas que por lo que lo rodea, no se pueden iniciar ni realizar roles agresivos. Por ejemplo:
                        <br />
                        <br />No se podrán cometer ilícitos en la Central de Policía.
                        <br />No se podrán cometer ilícitos en el Hospital.
                        <br />No se podrán cometer ilícitos en Zonas Seguras Adicionales (aquellas que por notificación te lo advierten)<br />
                        <br />1.10 — Fuera de Rol / Salirse de rol: Se prohíbe salirse de rol en cualquier momento, exceptuando aquellas ocasiones donde haya un staff presente y así lo ordene por X motivo (unicamente para situaciones administrativas).
                        <br />
                        <br />1.11 — No Rol (NRL): NO ROL o NRL es el no realizar o ignorar acciones que si se debieron haber realizado.
                        <br />
                        <br />1.12 — Evasión de rol: EVASIÓN DE ROL es cuando un rol no fue terminado por ambas partes, donde uno lo evade para evitar la consecuencia a futuro, o simplemente el rol.
                        <br />
                        <br />1.13 — Retomar Roles: En aquellos casos donde un usuario bajo cualquier motivo de desconexión, se le podrá solicitar a la otra parte involucrada en dicha situación de rol el retomarla bajo las mismas condiciones antes de que una de las partes se vea afectada por los motivos anteriormente mencionados.
                        <br />
                        <br />Aclaraciones (RETOMAR ROL):
                        <br />En caso de robos:
                        <br />
                        Si el robo NO comenzó: tanto los atracadores como los policias podrán optar por esperarlo unicamente 5 minutos, en caso de no llegar, se deberá seguir con el rol, siempre y cuando no quebr/ante otra normativa (ej: cantidad minima de atracadores), sino, se deberá cancelar el rol.
                        Si el robo comenzó: no se podrá retomar bajo ningún termino.
                        1.14 — Zonas.<br />
                        <br />Aclaraciones:
                        <br />
                        <br />En todas las zonas delimitadas por tiroteo (blancas/amarillas/rojas/violetas) se podrá cometer actos ilicitos siempre y cuando no interfiera ningún rol, ya sea por integrantes del robo, u otro motivo.
                        1.14 A — Las Zonas Blancas son zonas delimitadas en el mapa para efectuar los robos de mafias. El salir de esa zona en cualquier momento del robo se toma como abandonarla. Los tiradores deben estar dentro de la misma al comenzar el robo.
                        <br />
                        <br />1.14 B — Las Zonas Amarillas son zonas delimitadas en el mapa para efectuar los robos de civiles. El salir de esa zona en cualquier momento del robo se toma como abandonarla. Los tiradores deben estar dentro de la al comenzar el robo.
                        <br />
                        <br />1.14 C — Las Zonas Rojas son zonas delimitadas en el mapa denominadas donde no hay Rol de Entorno, ni se hace falta un rol previo para matar.
                        <br />
                        <br />1.14 D — Las Zonas Violetas son zonas delimitadas en el mapa para poder efectuar roles de secuestro.
                        <br />
                        <br />1.14 F — Las Zonas Verdes son zonas delimitadas en el mapa para no poder efectuar ningun tipo de rol agresivo (llamadas como Zonas Seguras).
                        <br />
                        <br />1.15 — Uso de Comunicaciones (Discord, TS3, etc.): La utilización de cualquier programa para comunicarte de forma OOC con un usuario IC está completamente prohíbida.
                        <br />
                        <br />1.16 — Abuso de Bugs.
                        Está terminantemente prohibido la explotación de errores dentro del servidor para el beneficio propio. Este tipo de conductas será motivo de graves sanciones, incluyendo pero no limitándose a bloqueos permanentes, reinicio completo de la cuenta y eliminación de la cuenta.
                        <br />
                        <br />En caso de encontrar un bug/exploit en nuestros sistemas deberás informar al equipo de desarrollo de dicha falla para que sea solucionada y recibirás una bonificación In-Game dependiendo del tipo de bug/exploit que hayas reportado.
                        <br />
                        <br />1.17 — Uso de Modificaciones, Cheats & Autoclickers/Macros.
                        Queda terminantemente prohibida la utilización de modificaciones que alteren el funcionamiento del mismo para conseguir un beneficios o ventajas sobr/e otros jugadores.<br />
                        <br />El utilizar cheats/mod menus/clientes/macros/autoclickers, etc, resultará en un bloqueo permanente de todos nuestros servidores.
                        <br />
                        <br />1.18 — Valorar vida.
                        Una vez la persona valora vida, no podrá decidir hacer lo contrario aunque el otro sujeto se de vuelta, no porte su arma y/o cualquier otra situación.
                        <br />
                        <br />1.19— Cuentas de juego y personajes.
                        Todas las cuentas registradas por el usuario pertenecen solo a su persona. Prestar una cuenta a un conocido y/o familiar no está permitido.
                        <br />
                        <br />1.20 — Insultos Fuera de Jugador (IOOC).
                        Está prohibido faltarle el respeto a otros usuarios sin importar la situación, en caso de ser encontrado/grabado faltando el respeto, el Staff de BA:RP se reserva el derecho de sancionar al usuario en falta.
                        <br />
                        <br />1.21 — Requisitos para Robos y Aclaraciones.
                        <br />
                        Aclaraciónes:<br />
                        <br />
                        <br />La utilización de BZGas, Molotov & Lanzagranadas de Humo solamente es permitida en zonas de robos & zonas de secuestro.
                        El Lanzagranadas de Humo unicamente puede ser utilizado para su función, poner humos en ciertos lugar para habilitar un peak, el utilizar un Humo para pegarlo en el cuerpo de un compañero, no está permitido.
                        Está prohibido el iniciar rol agresivo con un PFA que esté arriba de un cuatriciclo. (Estés en rol con la PFA o no)
                        Una vez el robo sea comenzado, hasta que el mismo no sea finalizado, NO se podrá cachear & NADIE se puede retirarse de la zona bajo ningún termino.
                        Una vez el robo sea comenzado, los atracadores no podrán salir a buscar rehenes.
                        Las negociaciones NO podrán ser comenzadas si no están todos los policias en la puerta del robo.
                        Las facciones legales podrán llevar refuerzos a los robos hasta que el mismo inicie.
                        Los tiradores en cualquier tipo de robo no podrán utilizar ningún vehículo para movilzarse. Tampoco podrán estar a plena vista y/o hacerse pasar por civiles en el entorno.
                        Una vez iniciado cualquier tipo de tiroteo (de robo), ya no se podrán aplicar más chalecos.
                        La Policía Federal Argentina no podrá posicionar tiradores si el atracador no tiene.
                        Robos a Médicos: No está permitido robarle a los Médicos en servicio dado que es un rol neutro el cual no puede realizar nada en beneficio ante otros usuarios.
                        <br />
                        <br />Robo a un civil (civiles): Para robarle a un Civil deberán haber mínimamente 1 Policía en Servicio. No se podrá obligarlo a ir a un cajero para retirar dinero que será sustraído posteriormente (no se permite robarle a trabajadores que esten vestidos y/o con el vehículo del mismo).
                        <br />
                        Robar a un Policía (civiles): Para robarle a un Policía deberán haber un mínimo de 3 Policías en Servicio.
                        <br />
                        <br />Secuestrar a un policía (civiles):
                        <br />
                        <br />Secuestradores necesarios: 8 en línea.
                        PFA necesarios: 12 en servicio.
                        Limite de PFA: 4 más que los atracadores.
                        Limite de secuestradores: 8 a 16.
                        Armas permitidas: Pistolas y Subfusiles, Granadas/Utilidades (8 latas/8 humos/6 molotov).
                        Objetos limitados: 2 porro por persona & 1 chaleco (liviano/pesado) por persona.
                        ACLARACIÓN: Está prohibido iniciar cualquier rol agresivo con un un PFA que se encuentre con las sirenas prendidas. Los mismos, solo podrán utilizarlas al estar yendo a un robo/secuestro.
                        Robo a 24/7 (civiles):
                        <br />
                        <br />Limite de PFA: 2 a 4.
                        Limite de atracadores: 1 a 3 (1 podrá ser tirador).
                        Armas permitidas: Pistolas.
                        Objetos limitados: 1 porro por persona.
                        NO se puede tener rehenes.
                        Robo a Maze Bank (civiles):
                        <br />
                        <br />Limite de PFA: 4 a 6.
                        Limite de atracadores: 3 a 5 (1 podrá ser tirador).
                        Armas permitidas: Pistolas y Subfusiles, Granadas/Utilidades (3 latas/2 humos).
                        Objetos limitados: 2 porro por persona.
                        1 rehenes como máximo.
                        Robo a Mini Banco Paleto (civiles):
                        <br />
                        <br />Limite de PFA: 4 a 6.
                        Limite de atracadores: 3 a 5 (1 podrá ser tirador).
                        Armas permitidas: Pistolas y Subfusiles, Granadas/Utilidades (2 latas/2 humos).
                        Objetos limitados: 2 porro por persona.
                        1 rehenes como máximo.
                        Robo a Casa de Michael (civiles):
                        <br />
                        Limite de PFA: 4 a 6 (helicoptero permitido).
                        Limite de atracadores: 3 a 5 (1 podrá ser tirador).
                        Armas permitidas: Pistolas, Subfusiles, Escopetas, Granadas/Utilidades (2 latas/2 humos).
                        Objetos limitados: 2 porro por persona.
                        1 rehenes como máximo.
                        Robo a Banco Fleeca (mafias):

                    </p>
                </div>
            </section>
        </div>
    )
}

export default Rules;