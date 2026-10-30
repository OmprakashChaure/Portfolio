from html.parser import HTMLParser

from django.contrib.staticfiles import finders
from django.test import SimpleTestCase


class PageLinks(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids = []
        self.links = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if 'id' in attrs:
            self.ids.append(attrs['id'])
        for key in ('href', 'src'):
            if key in attrs:
                self.links.append(attrs[key])


class PortfolioNavigationTests(SimpleTestCase):
    def test_navigation_and_static_files_have_real_destinations(self):
        response = self.client.get('/')
        self.assertEqual(response.status_code, 200)
        page = PageLinks()
        page.feed(response.content.decode())
        self.assertEqual(len(page.ids), len(set(page.ids)), 'Duplicate anchor IDs')
        for link in page.links:
            with self.subTest(link=link):
                if link.startswith('#'):
                    self.assertIn(link[1:], page.ids)
                elif link.startswith('/static/'):
                    self.assertIsNotNone(finders.find(link.removeprefix('/static/')))

    def test_every_interactive_pathway_has_a_project_destination(self):
        response = self.client.get('/')
        for number in range(1, 4):
            self.assertContains(response, f'id="project-{number}"', count=1)
