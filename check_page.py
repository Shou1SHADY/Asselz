from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={'width': 1440, 'height': 900})
    
    console_errors = []
    page.on('console', lambda msg: console_errors.append(msg.text) if msg.type == 'error' else None)
    
    page.goto('http://localhost:3000/expertise/3')
    page.wait_for_load_state('networkidle')
    page.wait_for_timeout(2000)
    
    title_el = page.locator('h1').first
    print(f'Page title: {title_el.text_content()}')
    
    link_count = page.locator('a').count()
    print(f'Total links: {link_count}')
    
    # Check for key sections
    hero = page.locator('[class*="heroBanner"]').count()
    features = page.locator('[class*="featuresGrid"]').count()
    service = page.locator('[class*="serviceSection"]').count()
    stats = page.locator('[class*="statsGrid"]').count()
    cta = page.locator('[class*="ctaBanner"]').count()
    
    print(f'Sections: hero={hero}, features={features}, service={service}, stats={stats}, cta={cta}')
    
    if console_errors:
        print(f'Console errors ({len(console_errors)}):')
        for e in console_errors:
            print(f'  {e}')
    else:
        print('No console errors')
    
    browser.close()
