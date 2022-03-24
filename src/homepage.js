import SidebarMenuComponent from './components/sidebar/sidebar';
import PostDrawer from './components/postdrawer/postDrawer';
import LeftBarComponent from './components/leftbar/leftBar';

function HomePage() {
    return (
        <div class="d-flex bd-highlight main-component">
            <div class="p-2 flex-fill bd-highlight p_options">
                <SidebarMenuComponent />
            </div>
            <div class="p-2 flex-fill bd-highlight scroll-feed">
                <PostDrawer />
            </div>
            <LeftBarComponent />
        </div>
    );
}

export default HomePage;