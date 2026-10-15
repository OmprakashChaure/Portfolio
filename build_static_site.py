"""Render the Django portfolio as static files for GitHub Pages."""

from __future__ import annotations

import os
import shutil
from pathlib import Path


ROOT = Path(__file__).resolve().parent
OUTPUT = ROOT / "_site"

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "portfolio_project.settings")

import django  # noqa: E402

django.setup()

from django.conf import settings  # noqa: E402
from django.test import Client  # noqa: E402


def main() -> None:
    response = Client().get("/")
    if response.status_code != 200:
        raise SystemExit(f"Portfolio page returned HTTP {response.status_code}")

    if OUTPUT.exists():
        shutil.rmtree(OUTPUT)
    OUTPUT.mkdir(parents=True, exist_ok=True)
    html = response.content.decode("utf-8")
    # GitHub Pages project sites are served under /Portfolio/, so make the
    # Django static URLs relative to the generated index page.
    html = html.replace("/static/", "static/")
    (OUTPUT / "index.html").write_text(html, encoding="utf-8")

    static_source = Path(settings.STATICFILES_DIRS[0])
    shutil.copytree(static_source, OUTPUT / "static", dirs_exist_ok=True)
    (OUTPUT / ".nojekyll").touch()
    print(f"Built static portfolio at {OUTPUT}")


if __name__ == "__main__":
    main()
