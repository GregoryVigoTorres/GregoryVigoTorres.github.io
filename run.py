import click
import os

from app import app


@click.command()
@click.option('-c', '--config', default='config.py', help='specify config')
def run(config):
    print('using config <%s>' %config)
    config_path = os.path.join('instance', config)
    app.config.from_pyfile(config_path)
    app.run()

if __name__ == '__main__':
    run()
